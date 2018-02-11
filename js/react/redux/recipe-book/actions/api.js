import {
  API_ERROR,
  API_START,
  API_DONE
} from '../constants/action-types';

const apiError = (error) => ({
  type: API_ERROR,
  error,
});

const apiStart = () => ({
  type: API_START,
});

const apiDone = () => ({
  type: API_DONE,
})

export { apiError, apiStart, apiDone };
