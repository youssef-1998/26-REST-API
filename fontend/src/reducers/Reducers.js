import {  GETCONTACTS } from "../actions/actionstype";

let allContacts = { contacts: [] }

const Reducer = (state = allContacts, action) => {
    switch (action.type) {
        case GETCONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state;
    }
}
export default Reducer;
