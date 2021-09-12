import React from "react";
import PropTypes from "prop-types";
import FormItem from "../FormItem/FormItem";
// import * as actions from "../../redux/actions"
import contactsOperations from "../../redux/operations";
import contactsSelectors from "../../redux/selectors";
import { connect } from "react-redux";
const FormList = ({ contacts, deleteItem }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <FormItem
          name={name}
          id={id}
          number={number}
          deleteItem={() => deleteItem(id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});
const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
FormList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
