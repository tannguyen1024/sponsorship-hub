// UPDATE_EVENT
import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateEventSaga() {
    yield takeLatest('UPDATE_EVENT', updateEvent);
}

function* updateEvent(action) {
    try {
        let venue_id = action.payload.venue_id;
        // console.log('Venue has ID of:', venue_id)
        if (venue_id === 0) {
            const responseVenue = yield axios.post(`/venue/create`, action.payload)
            // getting the new venue id to send in the next axios call with the rest of the event info
            venue_id = responseVenue.data.id;
        }
        // sends venue id as param and other event info as action payload
        yield axios.put(`/event/update/${venue_id}`, action.payload);
    } catch (error) {
        console.log(`Error in updateEventSaga:`, error);
    }
}

export default updateEventSaga;