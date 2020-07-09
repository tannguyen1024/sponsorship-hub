import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import venues from './venuesReducer';
import oneEvent from './oneEventReducer';
import sponsors from './sponsorReducer';
import landing from './landingReducer';
import results from './resultsReducer';
import eventType from './eventTypeReducer';
import admin from './adminReducer';
import approval from './approvalReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  venues, // list of all venues
  oneEvent, // holds all the information for one event
  sponsors, //holds event specific sponsor information for add and edit pages.
  landing, //will hold event data
  results, //will hold data for results
  eventType, //will hold data for event types
  admin, //sets user list for admin
  approval, // shows count of users that need to be approved
});

export default rootReducer;
