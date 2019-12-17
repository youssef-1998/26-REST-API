import { GETCONTACTS } from './actionstype';
import axios from "axios"

export const getallcontact = () => dispatch => {
    axios.get('/contacts').then(res =>
        dispatch({
            type: GETCONTACTS,
            payload: res.data
        })
    )
}
export const add = newContact => dispatch => {
    axios.post('/newContact', newContact).then(res => {
        dispatch(getallcontact())
    })
}
export const editContact = (id, updateContact) => dispatch => {
    axios.put(`/modifyContact/${id}`, updateContact).then(res => {
        dispatch(getallcontact())
    })
}
export const remove = (id) => dispatch => {
    axios.delete(`/delete_contact/${id}`).then(res =>
        dispatch(getallcontact())
    )
}