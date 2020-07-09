import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// postEventSaga creates one venue and one event and returns the new event's id for future use

function* postEventSaga() {
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('POST_EVENT2', postEvent2);
    yield takeLatest('DELETE_EVENT', deleteEvent);
}

function* deleteEvent(action) {
    try {
        let event_id = action.payload;
        yield axios.delete(`/event/delete/${event_id}`, action.payload);
        yield action.history.push(`/home`) // Pushes history using YIELD!
    }
    catch (error) {
    }
}

function* postEvent(action) {
    try {
        // Create Venue First
        let venue_id = action.payload.venue_id;
            if (venue_id === 0) { 
                const responseVenue = yield axios.post(`/venue/create`, action.payload)
                venue_id = responseVenue.data.id;
                }
        // Create Event Next using venue id as :id
        const responseEvent = yield axios.post(`/event/create/${venue_id}`, action.payload)
        let event_id = responseEvent.data.id;
        let idToSend = {event_id: event_id};
        yield put({ type: 'ADD_DEMO', payload: idToSend});
        yield axios.post(`/event/type/${event_id}`, action.payload);
        yield action.history.push(`/create-sponsor/${event_id}`) // Pushes history using YIELD!
    } catch (err) {
        console.log(`ERROR in FETCH ONE EVENT saga:`, err);
    }
}

function* postEvent2(action) {
    try {
        // Create Venue First
        let venue_id = action.payload.venue_id;
        // console.log('Venue has ID of:', venue_id)
        if (venue_id === 0) {
            const responseVenue = yield axios.post(`/venue/create`, action.payload)
            venue_id = responseVenue.data.id;
        }
        // Create Event Next using venue id as :id
        const responseEvent = yield axios.post(`/event/create/${venue_id}`, action.payload)
        let event_id = responseEvent.data.id;
        let idToSend = { event_id: event_id }
        yield put({ type: 'ADD_DEMO', payload: idToSend })
        yield put({ type: 'FETCH_ONE_EVENT', payload: idToSend })
        yield action.history.push(`/event/${event_id}`) // Pushes history using YIELD!
    } catch (err) {
        console.log(`ERROR in FETCH ONE EVENT saga:`, err);
    }
}

export default postEventSaga;
