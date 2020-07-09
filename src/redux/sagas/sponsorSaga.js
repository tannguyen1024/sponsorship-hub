import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sponsorSaga() {
    yield takeLatest('FETCH_SPONSORS', fetchSponsor);
    yield takeLatest('ADD_SPONSOR', sendSponsor);
    yield takeLatest('DELETE_SPONSOR', deleteSponsor);
    yield takeLatest('EDIT_SPONSOR', editSponsor);
}

//THE DELETE ROUTE
function* deleteSponsor(action){
    try{
        yield axios.delete(`/sponsor/${action.payload.id}`);
        yield put ({ type: 'FETCH_SPONSORS', payload: action.payload.event_id});
    }catch(error){
        console.log('DELETE failed', error); 
    }
}
//THE PUT ROUTE
function* editSponsor(action){
    try{
        yield axios.put(`/sponsor/edit`, action.payload);
   yield put ({type: 'FETCH_SPONSORS', payload: action.payload.event_id});
    }catch(error){
        console.log('editSponsor failed/', error);
        
    }
    

}
//The GET ROUTE
function* fetchSponsor(action) {
    try{
        const response = yield axios.get(`/sponsor/${action.payload}`);
        yield put({type: 'SET_SPONSORS', payload: response.data});
    }catch(error){
        console.log('Sponsor GET request failed', error);

    }
}
//The re-GET ROUTE

// the POST ROUTE
function* sendSponsor(action){
    try{
        yield axios.post('/sponsor', action.payload);
        yield put ({ type: 'FETCH_SPONSORS', payload: action.payload.event_id});
    }catch(error){
        console.log('add sponsor failed', error);
        
    }
    
}


export default sponsorSaga;