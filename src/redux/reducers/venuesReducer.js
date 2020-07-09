// Reducer for GET ALL Venues - Utilized by venuesSaga.js

const venuesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VENUES':
            return action.payload;
        default:
            return state;
    }
};

export default venuesReducer;