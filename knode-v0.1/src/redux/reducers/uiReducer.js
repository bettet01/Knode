import { userTypes } from '../actions/userActions'


const initalState = {
  loading: false,
  errors: {}
};

export default function (state = initalState, action) {
  switch (action.type) {
    case userTypes.SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
}