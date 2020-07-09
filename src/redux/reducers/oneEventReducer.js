const setOneEvent = (state = {}, action) => {
    switch(action.type){
        case 'SET_ONE_EVENT':
            return action.payload;
        default:
            return state;
    }
}

export default setOneEvent;