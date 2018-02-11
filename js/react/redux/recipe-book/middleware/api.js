import { API } from '../constants/action-types';
import { setRecipes } from '../actions/recipes';
import { apiError, apiStart, apiDone } from '../actions/api';

const BASE_URL = 'https://s3.amazonaws.com/500tech-shared/a';

const apiMiddleware = ({dispatch}) =>
  (next) =>
    (action) => {
      if (action.type !== API) {
        return next(action);
      }

      const handleError = error => dispatch(apiError(error));
      const { payload } = action;

      dispatch(apiStart());

      fetch(BASE_URL + payload.url)
        .then(response => {
          dispatch(apiDone());
          if (response.status >= 300) {
            handleError(response.status)
          } else {
            response.json()
              .then(data => dispatch({
                type: payload.success,
                payload: data,
              }));
          }
        })
        .catch(error => {
          dispatch(apiDone())
          handleError(error);
        });
    };



export default apiMiddleware;
