import * as types from '../../constants/ActionTypes';

const initialState = {
  isSignedIn: false,
  isSignedUp: false,
  error: '',
  serverStatus: null,
  signInstatus: false,
};

const signInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let { isSignedIn, signInstatus, error } = state;
      const { response } = action;
      signInstatus = response.ok;
      isSignedIn = true;
      error = '';
      return {
        ...state,
        isSignedIn,
        signInstatus,
        error,
      };
    }
    case types.SIGN_OUT_SUCCESS: {
      let { isSignedIn, signInstatus } = state;
      isSignedIn = false;
      signInstatus = false;
      return {
        ...state,
        isSignedIn,
        signInstatus,
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
    case types.SIGN_IN_ERROR: {
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
