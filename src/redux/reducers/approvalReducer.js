const approvalReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_APPROVAL':
            return action.payload;
        default:
            return state;
    }
}

export default approvalReducer;