import * as types from '../../constants/ActionTypes';

const initialState = {
  isSignedIn: false,
  isSignedUp: false,
  error: '',
  serverStatus: null,
};

const signInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let { isSignedIn } = state;
      const { signInStatus } = action;
      console.log(signInStatus);
      isSignedIn = true;
      return {
        ...state,
        isSignedIn,
        signInStatus,
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
    case types.SIGN_UP_SUCCESS: {
      let { isSignedUp } = state;
      isSignedUp = true;
      return {
        ...state,
        isSignedUp,
      };
    }
    case types.SIGN_UP_ERROR: {
      const {
        serverSideError: { error },
      } = action;
      return { ...state, error };
    }
    default:
      return state;
  }
};

export default signInPageReducer;
