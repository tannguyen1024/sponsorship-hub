const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//import authentication - this way only users with access can see ( protects server side ).
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

//GET router for DEFAULT results on load
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('in /results GET default');
    let queryString = `
        SELECT * FROM "event"
        ORDER BY event.id DESC;
    `;
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /results GET default:', error);
        res.sendStatus(500);
    });//end pool query 
});// end default get ROUTER

//GET router for search results
router.get('/landing', rejectUnauthenticated, (req, res) => {
    let state = req.query.state;
    let start = req.query.startDate;
    let end = req.query.endDate;
    
    console.log('in /results/landing GET', req.query.state, 'start:', start, 'end:', end);
    // if statements with multiple pool queries for search

    /// --- LANDING PAGE
    /// if NONE of the inputs are filled bring most recent events
    if (state === '' && start === 'null' && end === 'null') {
        console.log('No inputs have been filled.');
        let queryString = `
            SELECT * FROM "event"
            ORDER BY event.id DESC;
            `;
        pool.query(queryString).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500)
        });//end query
    }
    // if all inputs are filled search
    else if (state !== '' && start !== 'null' && end !== 'null') {
        console.log('All inputs have been filled.');
        let queryString = `
        SELECT * FROM "event"
        JOIN venues ON venues.id = event.venue_id
        WHERE state ILIKE $1
        AND start_date >= $2
        AND end_date <= $3
        ORDER BY start_date DESC;
        `;
        pool.query(queryString, [`%${state}%`, `%${start}%`, `%${end}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        })//end pool query
    }
    /// if state is filled and start and end is not
    else if (state !== '' && start === 'null' && end === 'null') {
        console.log('State has been filled, but not start and end date.');
        let queryString = `
            SELECT * FROM "event"
            JOIN venues ON venues.id = event.venue_id
            WHERE state ILIKE $1
            ORDER BY start_date DESC;
        `;
        pool.query(queryString, [`%${state}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end query
    }
    /// if state is empty but start date and end date is filled
    else if (state === '' && start !== 'null' && end !== 'null') {
        console.log('State input has not been filled, but start and end date have been.');
        let queryString = `
            SELECT * FROM "event"
            WHERE start_date BETWEEN $1 AND $2
            OR end_date BETWEEN $1 AND $2
            ORDER BY start_date DESC;
        `;
        pool.query(queryString, [`%${start}%`, `%${end}%`]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error in /results GET:', error);
            res.sendStatus(500);
        });//end pool query
    }
});//end get Router for results landing page

// GET router for ADVANCED SEARCH FILTER
router.get('/filter', rejectUnauthenticated, rejectLevel0, (req, res) => {
    // console.log('TEST MEEEEEE', req.query)

    let state = '';
    let start = '1753-01-01';
    let end = '3000-12-31';
    let type = '';
    let minAttend = 0;
    let maxAttend = 2147483647;
    let minSponsor = 0;
    let maxSponsor = 2147483647;
    let income = 0;
    console.log('in /results for advanced search GET', state, start, end, type, minAttend, maxAttend, minSponsor, maxSponsor);
    // TEST SEARCH USING IF STATEMENT
    let minSponsorshipPrice = `AND (sponsor_price >= $7 OR sponsor_price ISNULL)`;
    let maxSponsorshipPrice = `AND (sponsor_price <= $8 OR sponsor_price ISNULL)`;
    let eventType = `AND (event_type.type ILIKE $4 OR event_type.type ISNULL)`;

    if (req.query.state) {
        state = req.query.state;
    }
    if (req.query.startD) {
        start = req.query.startD;
    }
    if (req.query.endD) {
        end = req.query.endD;
    }
    if (req.query.type != '') {
        type = req.query.type;
        eventType = `AND event_type.type ILIKE $4`;
    }
    if (req.query.minAttend) {
        minAttend = req.query.minAttend;
    }
    if (req.query.maxAttend) {
        maxAttend = req.query.maxAttend;
    }
    if (req.query.minSponsorPrice && req.query.minSponsorPrice != 0) {
        minSponsor = req.query.minSponsorPrice;
        minSponsorshipPrice = `AND sponsor_price >= $7`;
    }
    if (req.query.maxSponsorPrice) {
        maxSponsor = req.query.maxSponsorPrice;
        maxSponsorshipPrice = `AND sponsor_price <= $8`;
    }
    if(req.query.income != ''){
        income = Number(req.query.income);
    }

    let results = [`%${state}%`, start, end, `%${type}%`, minAttend, maxAttend, minSponsor, maxSponsor, income];
    console.log(`RESULTS:`, results);
    

    let queryString = `
    SELECT event.id, event_name, start_date, end_date, city, state, event_image_url
    FROM "event"
    FULL JOIN venues ON venues.id=event.venue_id
    FULL JOIN sponsorships ON event.id=sponsorships.event_id
    FULL JOIN junction_event_income ON "event".id = junction_event_income.event_id
    FULL JOIN junction_event_type ON junction_event_type.event_id = event.id
    FULL JOIN event_type ON junction_event_type.type_id = event_type.id
    WHERE state ILIKE $1
    AND (start_date BETWEEN $2 AND $3 OR $2 BETWEEN start_date AND end_date)
    ${eventType}
	AND estimated_attendance >= $5
    AND estimated_attendance <= $6
    ${minSponsorshipPrice}
    ${maxSponsorshipPrice}
    AND "event".id IN 
	(SELECT "event".id
    FROM junction_event_income
    FULL JOIN "event" ON "event".id = junction_event_income.event_id
    WHERE income_range_id >=$9
    GROUP BY junction_event_income.event_id, "event".id
    HAVING SUM(percentage) >= 20)
    GROUP BY "event".id, venues.city, venues.state, event_type.type
    HAVING SUM(percentage) >= 20
    ORDER BY start_date DESC
    ;`

    // console.log(`QUERY:`, queryString);
    
    pool.query(queryString, results).then((result) => {
        // console.log('HELLOOOOO', result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log('error with advanced filter results:', error);
        res.sendStatus(500);
    });//end pool query
});//end GET router for Advanced Search

//GET router for SEARCH results
router.get('/search', rejectUnauthenticated, (req, res) => {
    let search = req.query.event_name
    console.log('in /results GET default');
    let queryString = `
        SELECT * FROM "event"
        WHERE event_name ILIKE $1
        ORDER BY "start_date" DESC;
    `;
    pool.query(queryString, [`%${search}%`]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /results GET default:', error);
        res.sendStatus(500);
    });//end pool query 
});// end SEARCH get ROUTER

module.exports = router;