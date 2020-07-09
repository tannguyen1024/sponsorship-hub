import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* demoSaga(){
    yield takeLatest('ADD_DEMO', sendDemo);
    yield takeLatest("UPDATE_DEMO", editDemo );
}
//The Demographic PUT CALLS
function* editDemo(action) {
    try{
        yield axios.put(`/demo/edit`, action.payload);
        yield action.history.push(`/event/${action.payload.event_id}`)
    }catch(error){
        console.log('edit demo failed', error); 
    }  
}

//The Demographic POST
function* sendDemo(action){
    try{
        yield axios.post(`/demo/gender`, action.payload);
        yield axios.post(`/demo/income`, action.payload);
        yield axios.post(`/demo/age`, action.payload);
        yield axios.post(`/demo/resident`, action.payload);
        // yield action.history.push(`/event/${action.payload.event_id}`)
        // commented out the push to make this happen during event create
    }catch(error){
        console.log('add demo failed', error);
        
    }
}

export default demoSaga;