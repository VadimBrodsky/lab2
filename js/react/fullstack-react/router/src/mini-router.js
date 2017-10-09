import React from 'react';
import createHistory from 'history/createBrowserHistory';

export const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return (React.createElement(component));
  } else {
    return null;
  }
};


export const Link = ({ to, children }) => (
  <a
    onClick={e => {
      e.preventDefault();

      // The App component will need to listen for changes
      // componentDidMount() {
      //   history.listen(() => this.forceUpdate());
      // }
      const history = createHistory();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);

