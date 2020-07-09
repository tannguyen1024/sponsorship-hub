const express = require('express');
const pool = require('../modules/pool');
const { response } = require('express');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

//GET router for the landing page to display limit 6 events
router.get('/', (req, res) => {
    // console.log('in /landing GET');
    let queryString = `
        SELECT * FROM "event"
        ORDER BY event.id 
        DESC LIMIT 6;
        ;`
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in /landing GET:', error);
        res.sendStatus(500);
    })
});//end get router for landing page

//GET router for event types
router.get('/event-types', (req, res) => {
    let queryString = `SELECT * FROM "event_type";`
    pool.query(queryString).then((result) => { 
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in /landing/event-types', error);
        res.sendStatus(500);
    })
});//end get router for event types

module.exports = router;