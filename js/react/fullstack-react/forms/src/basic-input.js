import React from 'react';
import Field from './field';
import CourseSlect from './course-select';

function isEmail(email) {
  return !!email.match(/^[^@\s]+@[^@\s]+$/);
}

export default class BasicInput extends React.Component {
  static displayName = "basic-input";

  state = {
    fields: {
      name: '',
      email: '',
      couse: null,
      department: null,
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
    if (!person.course) { return true; }
    if (!person.department) { return true; }
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

          <CourseSlect
            department={this.state.fields.department}
            course={this.state.fields.course}
            onChange={this.onInputChange}
          />

          <input
            type="submit"
            className="pure-button pure-button-primary"
            disabled={this.validate()}
          />
          </fieldset>
        </form>

        <div>
          <h3>People</h3>
          <ul>
            { this.state.people.map(({ name, email, department, course }, i) =>
              <li key={i}>{ [ name, email, department, course ].join(' - ') }</li>
            ) }
          </ul>
        </div>
      </div>
    );
  }
}
