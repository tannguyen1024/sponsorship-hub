import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// venuesSaga.js is utilized in CreateEvent.jsx to pull a list of Venues

function * venuesSaga() {
    yield takeLatest('FETCH_VENUES', fetchVenues);
}

function * fetchVenues() {
    try{
        const response = yield axios.get('/venue')
        yield put({type: 'SET_VENUES', payload: response.data})
    }
    catch (error) {
        console.log('Error in fetchVenues:', error)
    }
}

export default venuesSaga;