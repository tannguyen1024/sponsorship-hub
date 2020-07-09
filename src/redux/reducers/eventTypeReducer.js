const eventType = (state = [], action) => {
    if(action.type === 'GET_EVENT_TYPES'){
        return action.payload;
    }
    return state;
};//end eventType

export default eventType;