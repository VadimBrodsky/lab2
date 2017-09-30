import React from 'react';

export default class BasicInput extends React.Component {
  static displayName = "basic-input";

  state = {
    fields: {
      name: '',
      email: '',
    },
    people: [],
  };

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields });
  };

  onFormSubmit = (evt) => {
    const people = [...this.state.people, this.state.fields];
    this.setState({ people, fields: { name: '', email: '' } });
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <input
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <input type="submit" />
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
