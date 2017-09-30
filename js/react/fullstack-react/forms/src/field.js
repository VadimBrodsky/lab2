import React from 'react';
import PropTypes from 'prop-types';

export default class Field extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.value,
    error: false,
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    this.setState({ value, error });
    this.props.onChange({ name, value, error });
  }

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  render() {
    return (
      <div>
        <input
          placehodler={this.props.placeholder}
          value={this.props.value}
          onChange={this.onChange}
        />
        <span className="pure-form-message" style={{ color: 'red' }}>{ this.state.error }</span>
      </div>
    );
  }
}

