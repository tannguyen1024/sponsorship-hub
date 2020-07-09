import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga
function* landingSaga() {
    yield takeLatest('FETCH_LANDING', getLanding);
    yield takeLatest('FETCH_RESULTS', getResults);
    yield takeLatest('FETCH_DEFAULT_RESULTS', getDefaultResults);
    yield takeLatest('FETCH_ADV_RESULTS', getAdvResults);
    yield takeLatest('FETCH_EVENT_TYPES', eventTypes);
    yield takeLatest('FETCH_SEARCH_RESULTS', getSearch);
};//end landingSaga

// generator functions
// this function controls the GET for the landing page featured events
function* getLanding() {
    try {
        //send GET request for /landing and send to our reducer
        const response = yield axios.get(`/landing`);
        yield put({
            type: 'GET_LANDING',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in landing saga:', err)
    };//end try
};//end getLanding

//this function gets the default results for the page
function* getDefaultResults() {
    try {
        const response = yield axios.get('/results');
        yield put({
            type: 'GET_DEFAULT_RESULTS',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in defaultResults saga:', err)
    }
};//end getDefaultResults

//this function handles the results page on search from the landing page
function* getResults(action) {
    let startDate = action.payload.startDate;
    let endDate = action.payload.endDate;
    let state = action.payload.state;

    if (startDate === null && endDate === null){
        startDate = 'null';
        endDate = 'null';
    }
    try {
        //send GET request for /results and send to our reducer
        const response = yield axios.get(`/results/landing`, {
            params: {
                state, startDate, endDate
            }
        });
        yield put({
            type: 'GET_RESULTS',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in getResults saga');
    }
};//end getResults

//this function handles the advanced search from the results view page
function* getAdvResults(action) {
    let state = action.payload.state;
    let startD = action.payload.startD;
    let endD = action.payload.endD;
    let type = action.payload.type;
    let minAttend = action.payload.minAttend;
    let maxAttend = action.payload.maxAttend;
    let minSponsorPrice = action.payload.minSponsorPrice;
    let maxSponsorPrice = action.payload.maxSponsorPrice;
    let income = action.payload.income;

    try {
        const response = yield axios.get(`/results/filter`, {
            params: {
                state, startD, endD, type, minAttend, maxAttend, minSponsorPrice, maxSponsorPrice, income
            }
        })
        yield put({
            type: 'GET_ADV_RESULTS',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in getAdvResults saga')
    }
};//end getAdvResults

//this function gets the search results for the page
function* getSearch(action) {
    let event_name = action.payload.search
    try {
        const response = yield axios.get('/results/search', { params: { event_name } });
        yield put({
            type: 'GET_SEARCH_RESULTS',
            payload: response.data
        })
        yield action.history.push(`/results`) // Pushes history using YIELD!
    } catch (err) {
        console.log('Error in defaultResults saga:', err)
    }
};//end getSearch


// this function gets our event types so we can map through our event type selectors
function* eventTypes() {
    try {
        const response = yield axios.get(`/landing/event-types`);
        yield put({
            type: 'GET_EVENT_TYPES',
            payload: response.data
        })
    } catch (err) {
        console.log('error in getting event types:', err)
    }
};//end eventTypes

export default landingSaga;