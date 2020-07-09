const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

// GET route, gathers all sponsorships associated with event
router.get('/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `SELECT * FROM sponsorships WHERE event_id = $1 ORDER BY sponsor_price;`;
    pool.query(queryText, [req.params.id])
    .then(results => res.send(results.rows))
    .catch(error => {
        console.log('Errror retrieving Sponsors', error);
        res.sendStatus(500);
        
    })
});


// POST route for newly created sponsorship
router.post('/', rejectUnauthenticated, rejectLevel1, (req, res) => {
const queryText = `INSERT INTO sponsorships 
(sponsor_name, sponsor_price, sponsor_image_url, sponsor_description, event_id ) 
VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.sponsor_name, req.body.sponsor_price, req.body.sponsor_image_url, req.body.sponsor_description, req.body.event_id])
    .then( result => {
        res.sendStatus(200);
    }).catch (error => {
        console.log('post Sponsor route has error', error);
        res.sendStatus(500);      
    })
});


// DELETE ROUTE remove a sponsorship from event
router.delete('/:id', rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `DELETE FROM sponsorships WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
     res.sendStatus(200);
 }).catch((error) => {
     console.log('problem in sponsor.router Delete', error);
     res.sendStatus(500);
     
 })    
})

//PUT ROUTE used to create a new sponsorship
router.put(`/edit`, rejectUnauthenticated, rejectLevel1, (req, res) => {
    const queryText = `UPDATE sponsorships 
    SET sponsor_name = $1, sponsor_price = $2, sponsor_image_url = $3, sponsor_description = $4
    WHERE id = $5;`;
    pool.query(queryText, [req.body.sponsor_name, req.body.sponsor_price, req.body.sponsor_image_url, req.body.sponsor_description, req.body.id ])
    .then ((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('problem in sponsor.router EDIT', error);
        res.sendStatus(500);
        
    })
})


module.exports = router;