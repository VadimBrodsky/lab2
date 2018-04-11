import { Component } from 'react';
import PropTypes from 'prop-types';

// use the context api to pass store to children
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  render() {
    return this.props.children;
  }
}

// need to specify prop types for context to work
Provider.childContextTypes = {
  store: PropTypes.object,
};

export default Provider;
