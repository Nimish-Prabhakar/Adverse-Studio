import * as types from '../../constants/ActionTypes';

const initialState = {
  isSignedIn: false,
  isSignedUp: false,
  error: '',
  serverStatus: null,
  signInstatus: false,
  customer_id: 0,
};

const signInPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let { isSignedIn, signInstatus, error, customer_id } = state;
      const { response } = action;
      signInstatus = response.ok;
      isSignedIn = true;
      error = '';
      customer_id = response.customer_id;
      return {
        ...state,
        isSignedIn,
        signInstatus,
        error,
        customer_id,
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
      let { isSignedUp, isSignedIn } = state;
      isSignedUp = true;
      isSignedIn = true;
      return {
        ...state,
        isSignedUp,
        isSignedIn,
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
