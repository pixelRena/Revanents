import { CHANGE_SEARCH_FIELD } from "./constants";

// To avoid return statements, wrapped in brackets
// text - what the user inputs
// payload - sending data that is received (text)
// constant - capitalized to prevent errors

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})