// We populate this file in the chapter "Unit Testing"
/* eslint-disable no-unused-vars */
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react';
import FoodSearch from '../FoodSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('FoodSearch', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FoodSearch />);
  });

  it('should not display the remove icon', () => {
    expect(
      wrapper.find('.remove.icon').length
    ).toBe(0);
  });

  describe('user populates search field', () => {
    beforeEach(() => {
      // ... simulate user typing "brocc" in input
    });

    // ... specs

    describe('and API returns results', () => {
      beforeEach(() => {
        // ... simulate API returning results
      });

      // ... specs

      describe('then user clicks food item', () => {
        beforeEach(() => {
          // ... simulate user clicking food item
        });

        // ... specs
      });

      describe('then user types more', () => {
        beforeEach(() => {
          // ... simulate user typing "x"
        });

        describe('and API returns no results', () => {
          beforeEach(() => {
            // ... simulate API returning no results
          });

          // ... specs
        });
      });
    });
  });
});
