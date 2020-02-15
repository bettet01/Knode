import axios from 'axios'

export const dataTypes = {
  GET_SUBJECTS: 'GET_SUBJECTS',
  GET_CATEGORIES: 'GET_CATEGORIES'
}


export const getSubjects = () => (dispatch) => {
  axios
    .get('/learn/subject')
    .then((data) => {
      dispatch({
        type: dataTypes.GET_SUBJECTS,
        payload: data
      })
    })
}

export const getCategories = (subject) => (dispatch) => {
  axios
    .get(`/learn/${subject}/categories`)
    .then((data) => {
      dispatch({
        type: dataTypes.GET_CATEGORIES,
        payload: data.data.subjects
      })
    })
}


