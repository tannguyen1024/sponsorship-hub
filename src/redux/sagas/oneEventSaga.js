import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// oneEventSaga get all the information for one event

function* oneEventSaga() {
    yield takeLatest('FETCH_ONE_EVENT', fetchOneEvent);
}

function* fetchOneEvent(action){
    try{        
        // console.log(`oneEventSaga:`, action.payload);
        const res = yield axios.get(`/event/${action.payload}`);
        yield put({type: 'SET_ONE_EVENT', payload: res.data[0]});
    }catch(err){
        console.log(`ERROR in FETCH ONE EVENT saga:`, err);
    }
}

export default oneEventSaga;
