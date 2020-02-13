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
        case userTypes.SET_USER:
          return {
            ...state,
            user: action.payload
          }
    default:
      return state;
  }
}