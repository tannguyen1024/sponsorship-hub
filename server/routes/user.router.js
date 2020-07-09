const express = require('express');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectLevel0 } = require('../modules/auth_lvl_0'); // Rejects level 0 [Unapproved]
const { rejectLevel1 } = require('../modules/auth_lvl_1'); // Rejects level 1 and under [Brand]
const { rejectLevel2 } = require('../modules/auth_lvl_2'); // Rejects level 2 and under [Researcher]
//sendgrid data
const dotenv = require('dotenv')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

dotenv.config();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const name = req.body.name;
  const phone = req.body.phone;
  const title = req.body.title;
  const company = req.body.company;
  const msg = {
    //sending to the user who just registered
    to: username,
    //from sponsorship hub -- in this case for our project will be lamportkn@gmail.com
    from: 'lamportkn@gmail.com',
    cc: 'lamportkn@gmail.com', // 2nd email recipient
    // bcc: 'lamportkn@gmail.com', // 3rd email recipient
    subject: `Sponsorship Hub Membership Approval - ${name}`,
    text: `${name} has requested approval on Sponsorship Hub pending admin approval. 
    
    Sponsorship Hub
    612-100-1000`,
    //if you want bold
    // html: `<strong>Hello ${name}, please wait for your approval. Our admin at Sponsorship Hub will get back to you as soon as possible.Thank You.</strong>`
  }
  const queryText = 'INSERT INTO "user" (username, password, name, phone, title, company) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';

  pool.query(queryText, [username, password, name, phone, title, company])
    .then((result) => {
      res.sendStatus(201);

      //send grid mail
      // console.log('starting to send email!');
      sgMail.send(msg).then((result) => {
        // console.log('Success sending the email to Karl Nauman:', result);
      }).catch((error) => {
        console.log('Error sending the email:', error);
      });

    }).catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
