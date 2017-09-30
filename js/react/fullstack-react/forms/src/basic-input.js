import React from 'react';

function isEmail(email) {
  return !!email.match(/^[^@\s]+@[^@\s]+$/);

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

  validate = person => {
    const errors = {};
    if (!person.name) { errors.name = 'Name Required'; }
    if (!person.email) { errors.email = 'Email Required'; }
    if (person.email && !isEmail(person.email)) { errors.email = 'Invalid Email'; }
    return errors;
  }

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  onFormSubmit = (evt) => {
    const people = [...this.state.people];
    const person = this.state.fields;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault();

    if (Object.keys(fieldErrors).length) { return; }
    this.setState({
      people: people.concat(person),
      fields: {name: '', email: '' },
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit} class="pure-form pure-form-stacked">
          <fieldset>
            <input
              placeholder="Name"
              name="name"
              value={this.state.fields.name}
              onChange={this.onInputChange}
            />
            <span class="pure-form-message" style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>

            <input
              placeholder="Email"
              name="email"
              value={this.state.fields.email}
              onChange={this.onInputChange}
            />
            <span class="pure-form-message" style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>

            <input type="submit" class="pure-button pure-button-primary" />
          </fieldset>
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            {
              this.state.people.map(({ name, email }, i) => <li key={i}>{name} ({email})</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
