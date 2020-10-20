// import { errorHandling } from '../lib/ui/toastrHandler';

/**  Handle unexpected error inside action handler method and dispatch single redux action
 *
 *  handleError(error , actionType , data , dispatch)
 *
 */
export const handleError = (error, actionType, data, dispatch) => {
  if (dispatch && actionType && data) dispatchAction(actionType, data, dispatch);
  // errorHandling(error);
};

/** Dispatch single redux action
 *
 *  dispatchAction(actionType , data , dispatch)
 *
 */
export const dispatchAction = (type, data, dispatch) => {
  dispatch({
    type,
    data,
  });
};
