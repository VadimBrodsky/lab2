import React, { Component } from 'react';
import Link from './link';

class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store, filter, children } = this.props;
    const state = store.getState();

    return(
      <Link
        active={filter === state.visibilityFilter}
        onClick={() => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: filter,
        })}
      >
        {children}
      </Link>
    );
  }
}

export default FilterLink;
