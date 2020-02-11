import { userTypes } from '../types'

// axios  -- used to ansyc connect to our api and fetch data 
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    axios
      .post('/login', userData)
      .then((res) => {
        setAuthorizationHeader(res.data.token);
        dispatch({ type: userTypes.SET_AUTHENTICATED})
        history.push('/home')
      })
}

export const signupUser = (signupData, history) => (dispatch) => {
  axios
    .post('signup', signupData)
    .then((res) => {
      console.log(res)
      setAuthorizationHeader(res.data.token);
      dispatch({ type: userTypes.CREATE_USER})
      history.push('/profile')
    })
}


const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};