import axios from "axios";
import {
  addContactSuccsess,
  addContacError,
  addContactRequest,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContacError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./actions";

axios.defaults.baseURL = "http://localhost:4040";
// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());
//     try {
//         const { data } = await axios.get("/contacts");
//         dispatch(fetchContactSuccess(data))
//     }
//     catch (error) { dispatch(fetchContactError(error)) }
// };
    

// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactRequest());
//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch((error) => dispatch(fetchContactError(error)));
// };

const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccsess(data)))
    .catch((error) => dispatch(addContacError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccsess(id)))
    .catch((error) => dispatch(deleteContacError(error)));
};

export default {
  addContact, deleteContact,
  // fetchContacts
};
