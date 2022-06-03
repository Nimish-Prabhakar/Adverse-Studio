import * as types from '../../constants/ActionTypes';

const initialState = {
  deliveryDetails: {},
};

const deliveryDetailsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DELIVERY_DETAILS_SUCCESS: {
      let { deliveryDetails } = state;
    }
    default:
      return state;
  }
};

export default deliveryDetailsPageReducer;
