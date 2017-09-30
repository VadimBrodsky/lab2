import React from 'react';

export default class BasicButton extends React.Component {
  onButtonClick = (evt) => {
    const btn = evt.target;
    console.log(`The user clicked ${btn.name}: ${btn.value}`);
  }

  render() {
    return (
      <div>
        <h1>What do you think of React?</h1>
        <button class="pure-button" name="button-1" value="great" onClick={this.onButtonClick}>
          Great
        </button>

        &nbsp;

        <button class="pure-button" name="button-2" value="amazing" onClick={this.onButtonClick}>
          Amazing
        </button>
      </div>
    );
  }
}
