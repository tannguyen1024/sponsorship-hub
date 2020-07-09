const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

/**
 * GET route template
 */
router.get('/:id', rejectUnauthenticated, rejectLevel0, (req, res) => {
    let query = `
    SELECT e.*, et.type, et.id AS type_id, v.*, json_agg(DISTINCT jsonb_build_object('sponsorship_id', s.id, 'sponsor_name', s.sponsor_name, 'sponsor_price', s.sponsor_price, 'sponsor_image_url', s.sponsor_image_url, 'sponsor_description', s.sponsor_description)) AS sponsorship, json_agg(DISTINCT jsonb_build_object('age_range_id', jea.age_range_id, 'age_percentage', jea.percentage, 'age_range', ar.age_range)) AS age, json_agg(DISTINCT jsonb_build_object('gender_id', g.id, 'gender', g.gender, 'gender_percentage', jeg.percentage)) AS gender, json_agg(DISTINCT jsonb_build_object('income_range_id', ir.id, 'income_range', ir.income_range, 'income_percentage', jei.percentage)) AS income, json_agg(DISTINCT jsonb_build_object('residency_id', r.id, 'residency', r.residency, 'residency_percentage', jer.percentage)) AS residency
    FROM event AS e
    FULL JOIN junction_event_type AS jet
    ON e.id = jet.event_id
    FULL JOIN event_type AS et
    ON jet.type_id = et.id
    FULL JOIN venues AS v
    ON e.venue_id = v.id
    FULL JOIN junction_event_age AS jea
    ON e.id = jea.event_id
    FULL JOIN age_range AS ar
    ON jea.age_range_id = ar.id
    FULL JOIN junction_event_gender AS jeg
    ON e.id = jeg.event_id
    FULL JOIN gender AS g
    ON jeg.gender_id = g.id
    FULL JOIN junction_event_income AS jei
    ON e.id = jei.event_id
    FULL JOIN income_range AS ir
    ON jei.income_range_id = ir.id
    FULL JOIN junction_event_residency AS jer
    ON e.id = jer.event_id
    FULL JOIN residency AS r
    ON jer.residency_id = r.id
    FULL JOIN sponsorships AS s
    ON e.id = s.event_id
    WHERE e.id = $1
    GROUP BY e.id, v.id, et.type, et.id;
    `
    let id = req.params.id;    

    pool.query(query, [id]).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});


/**
 * POST ONE New Event
 */

router.post('/create/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {

    // console.log('Received from client, req.body:', req.body, 'req.params.id:',req.params.id)
    const venue_id = req.params.id;
    const r = req.body;
    const query = `INSERT INTO "event" (event_name, year_established, start_date, end_date, event_image_url, event_website, event_status, estimated_attendance, event_notes, contact_name, contact_title, contact_email, contact_phone, event_facebook, event_twitter, event_instagram, event_description, venue_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id`
    pool.query(query, [
        r.event_name, r.year_established, r.start_date, r.end_date, r.event_image_url, r.event_website, r.event_status, r.estimated_attendance, r.event_notes, r.contact_name, r.contact_title, r.contact_email, r.contact_phone, r.event_facebook, r.event_twitter, r.event_instagram, r.event_description, venue_id
    ]).then(result => {
        console.log('New Event ID is:',result.rows[0])
        res.send(result.rows[0]);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

router.post('/type/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const event_id = req.params.id;
    const query = `INSERT INTO "junction_event_type" (event_id, type_id)
    VALUES ($1, $2);`
    pool.query(query, [event_id, req.body.event_type]
    ).then(result => {
        console.log('New Event ID is:', result.rows[0])
        res.sendStatus(201);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

// UPDATE ROUTE for ONE EVENT
router.put('/update/:id', rejectUnauthenticated, rejectLevel1, async (req, res) => {
    const r = req.body;
    const venue_id = req.params.id;
    // console.log('REQ BODY FOR UPDATE IS:', r)
    const update = await pool.connect();
    try{
        await update.query('BEGIN');
        // Updating the Event
        const query = `UPDATE "event"
        SET 
        event_name = $1,
        year_established = $2,
        start_date = $3,
        end_date = $4,
        event_image_url = $5,
        event_website = $6,
        event_status = $7,
        estimated_attendance = $8,
        event_notes = $9,
        contact_name = $10,
        contact_title = $11,
        contact_email = $12,
        contact_phone = $13,
        event_facebook = $14,
        event_twitter = $15,
        event_instagram = $16,
        event_description = $17,
        venue_id = $18
        WHERE id = $19;`

        let eventValues = [
            r.event_name,
            r.year_established,
            r.start_date,
            r.end_date,
            r.event_image_url,
            r.event_website,
            r.event_status,
            r.estimated_attendance,
            r.event_notes,
            r.contact_name,
            r.contact_title,
            r.contact_email,
            r.contact_phone,
            r.event_facebook,
            r.event_twitter,
            r.event_instagram,
            r.event_description,
            venue_id,
            r.event_id
        ];

        await update.query(query, eventValues);

        // Updating the Event Type
        let typeQuery = `
        UPDATE junction_event_type
        SET type_id = $1
        WHERE event_id = $2;`;

        await update.query(typeQuery, [r.event_type, r.event_id]);
        await update.query('COMMIT');
        res.sendStatus(200);
    }catch(err){
        console.log(`ROLLBACK`, err);
        await update.query('ROLLBACK');
        throw err;
    }finally{
        update.release();
    }
});

router.delete('/delete/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
    let id = req.params.id;
    let query = `DELETE FROM event WHERE id=$1;`
    pool.query(query, [id]).then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;