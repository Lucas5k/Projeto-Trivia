import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import SettingsButton from '../components/SettingsButton';
import './Login.css';

class Login extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="Login">
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
