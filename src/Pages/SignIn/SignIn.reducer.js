import * as types from '../../constants/ActionTypes';

const initialState = {
  isSignedIn: false,
};

const signInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let { isSignedIn } = state;
      isSignedIn = true;
      return {
        ...state,
        isSignedIn,
      };
    }
    case types.SIGN_OUT_SUCCESS: {
      let { isSignedIn } = state;
      isSignedIn = false;
      return {
        ...state,
        isSignedIn,
      };
    }
    default:
      return state;
  }
};

export default signInPageReducer;
