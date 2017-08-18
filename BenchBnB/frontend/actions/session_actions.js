import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors))
    );
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout()
      .then(nullUser => dispatch(receiveCurrentUser(nullUser)),
        (errors) => dispatch(receiveErrors(errors))
    );
};