import React from 'react';
import FilterLink from './filter-router-link';

const Footer = () => (
  <p>
    Show:
    &nbsp;
    <FilterLink filter='all'>
      All
    </FilterLink>
    &nbsp;
    <FilterLink filter='active'>
      Active
    </FilterLink>
    &nbsp;
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
