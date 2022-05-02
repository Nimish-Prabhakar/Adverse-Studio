import * as types from '../../constants/ActionTypes';

const initialState = {
  deliveryDetails: {},
};

const deliveryDetailsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS: {
      let { isSignedIn } = state;
      isSignedIn = true;
      return {
        ...state,
        isSignedIn,
      };
    }
    default:
      return state;
  }
};

export default deliveryDetailsPageReducer;
