import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getError = (state) => state.contacts.error;
const getItems = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;

// const getVisibleContacts = state => {
//     const items = getItems(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();
//  return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
// }

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getLoading,
  getError,
  getItems,
  getFilter,
  getVisibleContacts,
};
