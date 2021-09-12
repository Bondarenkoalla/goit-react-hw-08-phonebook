import "./App.css";
import AppBar from "./Components/AppBar";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// import Form from "./Components/Form/Form";
import React, { Component } from "react";
// import Finder from "./Components/Finder/Finder";
// import FormList from "./Components/FormList/FormList";
import ContactsView from "./views/ContactsView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import contactsOperations from "./redux/operations";
import contactsSelectors from "./redux/selectors";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchContacts();
  // }

  render() {
    return (
      <div className="App">
        <AppBar />
        {this.props.error && <h1>Oops something went wrong</h1>}

        {this.props.isLoadingContacts && <h1>Loading...</h1>}

        <Switch>
          <Route path="/register" exact>
        <RegisterView />
      </Route>

      <Route path="/login">
        <LoginView />
      </Route>

          <Route path="/contacts" exact>
            <ContactsView />
          </Route>

          {/* <Route>
        <NotFoundView />
      </Route> */}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});
// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

export default connect(mapStateToProps,
  // mapDispatchToProps
)(App);
