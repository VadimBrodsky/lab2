import React from 'react';
import PropTypes from 'prop-types';

function isEmail(email) {
  return !!email.match(/^[^@\s]+@[^@\s]+$/);

}

class Field extends React.Component {
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

export default class BasicInput extends React.Component {
  static displayName = "basic-input";

  state = {
    fields: {
      name: '',
      email: '',
    },
    fieldErrors: {},
    people: [],
  };

  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!person.name) { return true; }
    if (!person.email) { return true; }
    if (errMessages.length) { return true; }

    return false;
  }

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  onFormSubmit = evt => {
    const people = this.state.people;
    const person = this.state.fields;

    evt.preventDefault();

    if (this.validate()) { return; }

    this.setState({
      people: people.concat(person),
      fields: {name: '', email: '' },
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit} className="pure-form pure-form-stacked">
          <fieldset>

            <Field
              placeholder="Name"
              name="name"
              value={this.state.fields.name}
              onChange={this.onInputChange}
              validate={val => (val ? false : 'Name Required')}
            />

            <Field
              placeholder="Email"
              name="email"
              value={this.state.fields.email}
              onChange={this.onInputChange}
              validate={val => (isEmail(val) ? false : 'Invalid Email')}
            />

          <input
            type="submit"
            className="pure-button pure-button-primary"
            disabled={this.validate()}
          />
          </fieldset>
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.people.map(({ name, email }, i) =>
              <li key={i}>{name} ({email})</li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
}
