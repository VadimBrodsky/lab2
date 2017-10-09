import React from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';

export class Router extends React.Component {
  // to expose context to children
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.history = createHistory();
    this.history.listen(() => this.forceUpdate());
  }

  getChildContext() {
    return {
      history: this.history,
      location: window.location,
    };
  }

  render() {
    return this.props.children;
  }
}

export const Route = ({ path, component }, { location }) => {
  const pathname = location.pathname;
  if (pathname.match(path)) {
    return (React.createElement(component));
  } else {
    return null;
  }
};

Route.contextTypes = {
  location: PropTypes.object,
}

export const Link = ({ to, children }, { history }) => (
  <a
    onClick={e => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);

Link.contextTypes = {
  history: PropTypes.object,
}

