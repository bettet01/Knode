import userTypes from '../types'




const initialState = {
  authenticated: false,
  user: {},
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
      case userTypes.CREATE_USER:
        return {
          ...state,
          authenticated: true
        }
    default:
      return state;
  }
}