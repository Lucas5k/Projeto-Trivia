import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import SettingsButton from '../components/SettingsButton';

class Login extends Component {
  render() {
    const { history } = this.props;

    return (
      <main>
        <SettingsButton history={ history } />
        <LoginForm />
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
