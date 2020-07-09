const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]


/**
 * POST routes gender, income, age, residency. These 4 Post routes fire in sequence from the sponsor Saga
 */
//gender
//post route
router.post('/gender', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `INSERT INTO junction_event_gender 
    (event_id, gender_id, percentage) 
    VALUES ($1, 1, 0), ($1, 2, 0), ($1, 3, 0);`;
    pool.query(queryText, [req.body.event_id])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//income
//post route
router.post('/income', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `INSERT INTO junction_event_income
    (event_id, income_range_id, percentage)
    VALUES ($1, 1, 0), ($1, 2, 0), ($1, 3, 0), ($1, 4, 0), ($1, 5, 0), ($1, 6, 0), ($1, 7, 0);`;
    pool.query(queryText, [req.body.event_id])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//age
//post route
router.post('/age', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `INSERT INTO junction_event_age
    (event_id, age_range_id, percentage)
     VALUES ($1, 1, 0), ($1, 2, 0), ($1, 3, 0), ($1, 4, 0), ($1, 5, 0), ($1, 6, 0), ($1, 7, 0);`;
    pool.query(queryText, [req.body.event_id])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

//residency
//post route
router.post('/resident', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `INSERT INTO junction_event_residency 
    (event_id, residency_id, percentage) 
    VALUES ($1, 1, 0), ($1, 2, 0);`;
    pool.query(queryText, [req.body.event_id])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('post gender Demo route has error', error);
            res.sendStatus(500);
        })
});

/**
 * PUT routes gender, income, age, residency. This updates all demographic information for a specific event
 */
// gender PUT
router.put(`/edit`, rejectUnauthenticated, rejectLevel1, async (req, res) => {
let demo = req.body;
const sendDemo = await pool.connect();
try{
    await sendDemo.query('BEGIN');
    let genderQuery = `UPDATE junction_event_gender SET percentage = $1 WHERE event_id=$2 AND gender_id = $3;`;
    await sendDemo.query(genderQuery, [demo.female, demo.event_id, 1]);
    await sendDemo.query(genderQuery, [demo.male, demo.event_id, 2]);
    await sendDemo.query(genderQuery, [demo.other, demo.event_id, 3]);
    let IncomeQuery = `UPDATE junction_event_income SET percentage = $1 WHERE event_id=$2 and income_range_id = $3;`;
    await sendDemo.query(IncomeQuery, [demo.Income0_24999, demo.event_id, 1]);
    await sendDemo.query(IncomeQuery, [demo.Income25000_49999, demo.event_id, 2]);
    await sendDemo.query(IncomeQuery, [demo.Income50000_74999, demo.event_id, 3]);
    await sendDemo.query(IncomeQuery, [demo.Income75000_99999, demo.event_id, 4]);
    await sendDemo.query(IncomeQuery, [demo.Income100000_149999, demo.event_id, 5]);
    await sendDemo.query(IncomeQuery, [demo.Income150000_199999, demo.event_id, 6]);
    await sendDemo.query(IncomeQuery, [demo.Income200000, demo.event_id, 7]);
    let ageQuery = `UPDATE junction_event_age SET percentage = $1 WHERE event_id=$2 and age_range_id = $3;`;
    await sendDemo.query(ageQuery, [demo.Age0_17, demo.event_id, 1]);
    await sendDemo.query(ageQuery, [demo.Age18_24, demo.event_id, 2]);
    await sendDemo.query(ageQuery, [demo.Age25_34, demo.event_id, 3]);
    await sendDemo.query(ageQuery, [demo.Age35_44, demo.event_id, 4]);
    await sendDemo.query(ageQuery, [demo.Age45_54, demo.event_id, 5]);
    await sendDemo.query(ageQuery, [demo.Age55_64, demo.event_id, 6]);
    await sendDemo.query(ageQuery, [demo.Age65, demo.event_id, 7]);
    let residentQuery = `UPDATE junction_event_residency SET percentage = $1 WHERE event_id=$2 and residency_id = $3;`;
    await sendDemo.query(residentQuery, [demo.in_state, demo.event_id, 1]);
    await sendDemo.query(residentQuery, [demo.out_of_state, demo.event_id, 2]);
    await sendDemo.query('COMMIT');
    res.sendStatus(200);
} catch(error){
    console.log(`ROLLBACK:`, error);
    await sendDemo.query("ROLLBACK");
    throw error;
} finally {
    sendDemo.release();
}
})

module.exports = router;