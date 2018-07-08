import React from "react";
import PropTypes from "prop-types";

import AuthUserContext from "./AuthUserContext";
import { firebase } from "../../firebase";

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    getChildContext() {
      return {
        authUser: this.state.authUser
      };
    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object
  };

  return WithAuthentication;
};

export default withAuthentication;
