           
import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactError = createAction("fetchContactError");


export const addContactRequest = createAction("addContactsRequest");
export const addContactSuccsess = createAction("addContactSuccsess");
export const addContacError = createAction("addContactError");


export const deleteContactRequest = createAction("deleteContactsRequest");
export const deleteContactSuccsess = createAction("deleteContactSuccsess");
export const deleteContacError = createAction("deleteContactError");

export const clearError = createAction("contacts/clearError");
export const filterContacts = createAction("FITER_CONTACTS");

