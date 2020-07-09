
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
// Event router for getting one event's information
const event = require('./routes/event.router');
// Venue router for getting every venue
const venue = require('./routes/venue.router');
//Sponsor router for getting event specific sponsors (create and edit pages)
const sponsors = require('./routes/sponsor.router');
const demo = require('./routes/demo.router');
const admin = require('./routes/admin.router')
// landing router contains routes for landing & result page data
const landing = require('./routes/landing.router');
const results = require('./routes/results.router');

const path = require('path'); /* Used for Heroku Import if using BrowserRouter */

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/event', event);
app.use('/venue', venue); // Used to GET all Venues
app.use('/landing', landing);
app.use('/sponsor', sponsors);
app.use('/results', results);
app.use('/demo', demo);
app.use('/admin', admin);

// Serve static files
app.use(express.static('build'));

// Adding for HEROKU - CATCH ALL -> Go here instead if above is not found.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
