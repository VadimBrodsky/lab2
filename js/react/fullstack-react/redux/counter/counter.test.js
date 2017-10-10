const {
  reducer,
  createStore,
} = require('./index.js');

describe('reducer', () => {
  const unkndownAction = { type: 'UNKNOWN' };

  describe('increment action', () => {

    it('should increment a counter', () => {
      const incrementAction = {
        type: 'INCREMENT',
        amount: 1,
      };

      expect(reducer(0, incrementAction)).toEqual(1);
      expect(reducer(1, incrementAction)).toEqual(2);
      expect(reducer(5, incrementAction)).toEqual(6);
    });

    it('should do nothing if the action is unknown', () => {
      expect(reducer(5, unkndownAction)).toEqual(5);
      expect(reducer(8, unkndownAction)).toEqual(8);
    });

    it('should accept a custom incement amount', () => {
      const incrementAction = {
        type: 'INCREMENT',
        amount: 5,
      };

      expect(reducer(0, incrementAction)).toEqual(5);
      expect(reducer(1, incrementAction)).toEqual(6);
    })
  });

  describe('decrement action', () => {
    it('should decrement a counter', () => {
      const decrementAction = {
        type: 'DECREMENT',
        amount: 1,
      };

      expect(reducer(10, decrementAction)).toEqual(9);
      expect(reducer(9, decrementAction)).toEqual(8);
      expect(reducer(5, decrementAction)).toEqual(4);
    });

    it('should accept a custom decrement amount', () => {
      const decrementAction = {
        type: 'DECREMENT',
        amount: 11,
      };

      expect(reducer(100, decrementAction)).toEqual(89);
    });
  });
});

describe('store', () => {
  const store = createStore(reducer);

  describe('dispatch call', () => {

    it('should dispatch the increment action on the store', () => {
      const incrementAction = {
        type: 'INCREMENT',
        amount: 3,
      };

      store.dispatch(incrementAction);
      expect(store.getState()).toEqual(3);

      store.dispatch(incrementAction);
      expect(store.getState()).toEqual(6);
    });

    it('should dispatch the decrement action on the store', () => {
      const decrementAction = {
        type: 'DECREMENT',
        amount: 4,
      };

      store.dispatch(decrementAction);
      expect(store.getState()).toEqual(2);
    });
  });
});
