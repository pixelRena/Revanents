import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
    searchfield: ''
}

// reducer
// pure function that creates/returns an entire new object that is exactly identical to previous state
export const searchRevs = (state=initalState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // action received
            // return new state of the action (input) received
            return Object.assign({}, 
                state, 
                {searchField: action.payload});
        default:
            return state;
    }
}