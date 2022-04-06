import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      playerName: '',
      email: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleDisableButton = () => {
    const { playerName, email } = this.state;
    const emailRegExp = /^([a-z0-9]{1,}[._]{0,1}[a-z0-9]{1,})*(@[a-z0-9]{1,}.com)$/i;
    if (playerName.length === 0 || !email.match(emailRegExp)) {
      return true;
    }
    return false;
  };

  render() {
    const { playerName, email } = this.state;

    return (
      <form className="LoginForm">
        <label htmlFor="input-player-name">
          <input
            id="input-player-name"
            data-testid="input-player-name"
            name="playerName"
            type="text"
            value={ playerName }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-gravatar-email">
          <input
            id="input-gravatar-email"
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.handleDisableButton() }
        >
          Play
        </button>
      </form>
    );
  }
}

export default connect()(LoginForm);
