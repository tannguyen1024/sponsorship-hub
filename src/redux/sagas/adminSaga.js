import {put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* adminSaga(){
    yield takeLatest('FETCH_USER_LIST', fetchUserList);
    yield takeLatest('CHANGE_ACCESS_LEVEL', changeAccessLevel);
    yield takeLatest('FETCH_APPROVAL', fetchApproval);
    yield takeLatest('DELETE_USER', deleteUser);
}

// Used for getting a count of who needs approval
function* fetchApproval(action){
    try{
        const response = yield axios.get('/admin/users/approval');
        yield put({ type: 'SET_APPROVAL', payload: response.data });
    }
    catch(error){
        console.log(`ERROR in ADMIN SAGA:`, error);
    }
}

function* fetchUserList(action){
    try{
        const res = yield axios.get('/admin/users');
        yield put({type:'SET_USER_LIST', payload: res.data});
        
    }catch(err){
        console.log(`ERROR in ADMIN SAGA:`, err);
    }
}


function* changeAccessLevel(action){
    try{
        yield axios.put('/admin/access-level', action.payload);
        yield put({type: 'FETCH_APPROVAL'})
    }catch(err){
        console.log(`ERROR in ChangeAccessLevel:`, err);
        
    }
}

function* deleteUser(action) {
    try {
        yield axios.delete(`/admin/delete/${action.payload}`);
        yield put({ type: 'FETCH_USER_LIST' })
    } catch (err) {
        console.log(`ERROR in ChangeAccessLevel:`, err);

    }
}

export default adminSaga;