import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  actionGetQuestions,
  actionGetToken,
  actionUpdatePlayerData,
} from '../redux/actions';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gravatarEmail: '',
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { requestToken, updatePlayerDate } = this.props;
    const { name, gravatarEmail } = this.state;
    requestToken();
    updatePlayerDate({ name, gravatarEmail });
    this.setState({ redirect: true });
  }

  handleDisableButton = () => {
    const { name, gravatarEmail } = this.state;
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    if (name.length === 0 || !gravatarEmail.match(emailRegExp)) {
      return true;
    }
    return false;
  };

  render() {
    const { name, gravatarEmail, redirect } = this.state;

    return (
      <form className="LoginForm">
        { redirect && <Redirect to="/game" /> }
        <label htmlFor="input-player-name">
          <input
            id="input-player-name"
            data-testid="input-player-name"
            name="name"
            type="text"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-gravatar-email">
          <input
            id="input-gravatar-email"
            data-testid="input-gravatar-email"
            type="email"
            name="gravatarEmail"
            value={ gravatarEmail }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.handleDisableButton() }
          onClick={ this.handleSubmit }
        >
          Play
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestToken: () => dispatch(actionGetToken()),
  updatePlayerDate: (state) => dispatch(actionUpdatePlayerData(state)),
  requestQuestions: (token) => dispatch(actionGetQuestions(token)),
});

LoginForm.propTypes = {
  requestToken: PropTypes.func.isRequired,
  updatePlayerDate: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
