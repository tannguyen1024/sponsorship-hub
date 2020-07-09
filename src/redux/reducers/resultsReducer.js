const results = (state = [], action) => {
    // GET default data for results page 
    if (action.type === 'GET_DEFAULT_RESULTS'){
        return action.payload;
    }
    //GET results from landing page search
    else if (action.type === 'GET_RESULTS') {
        return action.payload;
    }
    // GET results for adv search
    else if (action.type === 'GET_ADV_RESULTS'){
        console.log('YOU HAVE GOTTEN ADVANCED RESULTS', action.payload);
        return action.payload;
    }
    else if (action.type === 'GET_SEARCH_RESULTS'){
        console.log('YOU HAVE GOTTEN SEARCH RESULTS', action.payload);
        return action.payload;
    }
    return state;
};//end results

export default results;