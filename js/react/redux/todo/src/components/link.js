//
// not used anymore, replaced by filter-router-link
//

import React from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
      onClick={e => {
        e.preventDefault();
        onClick(active);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
