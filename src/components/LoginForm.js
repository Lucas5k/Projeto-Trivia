import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionGetAvatar, actionGetToken,
  actionUpdatePlayerData,
} from '../redux/actions';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gravatarEmail: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    const { gravatarEmail } = this.state;
    const { requestToken, updatePlayerDate, history, requestAvatar } = this.props;
    requestToken();
    updatePlayerDate(this.state);
    requestAvatar(gravatarEmail);
    history.push('/game');
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
    const { name, gravatarEmail } = this.state;

    return (
      <form className="LoginForm">
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
  requestAvatar: (email) => dispatch(actionGetAvatar(email)),
});

LoginForm.propTypes = {
  requestToken: PropTypes.func.isRequired,
  updatePlayerDate: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  requestAvatar: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
