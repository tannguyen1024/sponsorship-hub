const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]

/**
 * GET route template
 */
router.get('/users', rejectUnauthenticated, rejectLevel2, (req, res) => {
    let query = `
    SELECT id, username, name, title, company, phone, access_level
    FROM "user"
    ORDER BY access_level, name;`

    // console.log(`IN ADMIN!`);
    
    pool.query(query).then(results => {
        console.log(results.rows);
        res.send(results.rows)
    }).catch(err => {
        console.log(`ERROR in ADMIN:`, err);
        res.sendStatus(500);
    })
});

/**
 * PUT route template
 */
router.put('/access-level', rejectUnauthenticated, rejectLevel2, (req, res) => {
    let query = `
    UPDATE "user"
    SET access_level = $1
    WHERE id = $2;`;

    let id = req.body.user_id;
    let newLevel = req.body.newLevel

    pool.query(query, [newLevel, id]).then(results => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(`ERROR in ADMIN/ACCESS-LEVEL:`, err);
        res.sendStatus(500);
    })
});

// Shows a count of how many users need approval
router.get('/users/approval', rejectUnauthenticated, rejectLevel2, (req, res) => {
    let query = `
    SELECT Count(access_level) as access_lvl_0 FROM "user"
    WHERE access_level = 0;`
    // console.log(`IN ADMIN!`);
    pool.query(query).then(results => {
        // console.log(results.rows);
        res.send(results.rows[0])
    }).catch(err => {
        // console.log(`ERROR in ADMIN:`, err);
        res.sendStatus(500);
    })
});

/**
 * DELETE SINGLE USER
 */
router.delete('/delete/:id', rejectUnauthenticated, rejectLevel2, (req, res) => {
    let query = `DELETE FROM "user" WHERE id=$1;`;
    let id = req.params.id;
    pool.query(query, [id]).then(results => {
        console.log('User deleted:', req.params.id)
        res.sendStatus(200);
    }).catch(err => {
        console.log(`ERROR DELETING USER:`, err);
        res.sendStatus(500);
    })
});




module.exports = router;