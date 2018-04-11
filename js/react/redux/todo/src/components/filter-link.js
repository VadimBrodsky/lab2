import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from './link';

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  clickHandler = () => {
    const { filter } = this.props;
    const { store } = this.context;

    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter,
    });
  }

  render() {
    const { filter, children } = this.props;
    const { store } = this.context;

    const state = store.getState();

    return(
      <Link
        active={filter === state.visibilityFilter}
        onClick={this.clickHandler}
      >
        {children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object,
};

export default FilterLink;
