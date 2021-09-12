import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccsess,
  addContacError,
  deleteContactRequest,
  deleteContactSuccsess,
  deleteContacError,
  filterContacts,
  fetchContactRequest,
  fetchContactSuccess,
    fetchContactError,
  clearError
} from "./actions";

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccsess]: () => false,
  [addContacError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccsess]: () => false,
  [deleteContacError]: () => false,
});
const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContacError]: (_, { payload }) => payload,
  [deleteContacError]:  (_, { payload }) => payload,
  [clearError]: () => null,
});

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccsess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccsess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading,error });
// redux
// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case 'ADD_CONTACT': return [...state, payload];
//         case 'DELETE_CONTACT': console.log('state', state); return state.filter(({ id }) => id !== payload);

//         default: return state;
//     }
// };
// const filter = (state = '', { type, payload }) => {
//     console.log(payload);
//     switch (type) {
//         case 'FITER_CONTACTS': return payload;
//         default: return state;
//     }
// };
