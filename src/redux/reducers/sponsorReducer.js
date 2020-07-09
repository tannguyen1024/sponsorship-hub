const sponsorReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPONSORS':
            console.log('in sponsorReducer', action.payload);

            return action.payload;
        case 'UNSET_SPONSORS':
            return [];
        default:
            return state;
    }
};

// sponsors will be on the redux state at:
// state.sponsors
export default sponsorReducer;