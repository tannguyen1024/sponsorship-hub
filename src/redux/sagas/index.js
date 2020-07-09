import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import venuesSaga from './venuesSaga';
import oneEventSaga from './oneEventSaga';
import landingSaga from './landingSaga';
import postEventSaga from './postEventSaga';
import sponsorSaga from './sponsorSaga';
import demoSaga from './demoSaga';
import adminSaga from './adminSaga';
import updateEvent from './updateEventSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    venuesSaga(),
    oneEventSaga(),
    postEventSaga(),
    landingSaga(),
    sponsorSaga(),
    demoSaga(),
    adminSaga(),
    updateEvent(),
  ]);
}
