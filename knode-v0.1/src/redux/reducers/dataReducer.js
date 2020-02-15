import { dataTypes } from '../actions/dataActions'

const initialState = {
  subjects: {},
  categories: {},
  knodes: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case dataTypes.GET_SUBJECTS:
      return{
        ...state,
        subjects: action.payload
      }
    case dataTypes.GET_CATEGORIES:
        return{
          ...state,
          categories: action.payload
        }
    default:
      return state;
  }
}