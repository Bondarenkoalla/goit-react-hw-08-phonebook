import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from "../../redux/actions"
import operations from "../../redux/operations";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import contactsSelectors from "../../redux/selectors"
class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  reset() {
    this.setState({ name: "", number: "" });
  }

  onInputChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };
  onInputTelChange = (event) => {
    this.setState({ number: event.currentTarget.value });
  };

  onFormSubmit = (event) => {
    const { name } = this.state;
    const isAlreadyInContacts = this.props.contacts.some(
      (contact) => contact.name === name
    );
    if (isAlreadyInContacts) {
      alert("Контакт с таким именем уже есть");
      return;
    }
    event.preventDefault();
    this.props.onSubmitProp(this.state.name, this.state.number);
    this.reset();
  };

  render() {
    const inputId = uuidv4();
    return (
      <form onSubmit={this.onFormSubmit} className={styles.form}>
        <label htmlFor={inputId} className={styles.form_item}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={inputId}
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.form_item}>
          Number:
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onInputTelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
};
const mapStateToProps = state => ({
  contacts: contactsSelectors.getItems(state)
});
const mapDispatchToProps = dispatch => ({
  onSubmitProp: (name, number) => dispatch(operations.addContact(name, number))
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);
Form.propTypes = {
  onSubmitProp: PropTypes.func.isRequired,
};
