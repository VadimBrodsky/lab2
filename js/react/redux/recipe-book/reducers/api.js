import {
  API_ERROR,
  API_START,
  API_DONE
} from '../constants/action-types';

const apiReducer = (serverStatus = { requests: 0 }, action) => {
  switch (action.type) {
    case API_ERROR:
      console.log(`Error fetching data: ${action.error}`);
      return Object.assign({}, serverStatus, {
        error: action.error,
      });
    case API_START:
      return Object.assign({}, serverStatus, {
        requests: serverStatus.requests + 1
      });
    case API_DONE:
      return Object.assign({}, serverStatus, {
        requests: serverStatus.requests - 1
      });
  }

  return serverStatus;
};

export default apiReducer;
