import userTypes from '../types'

// axios  -- used to ansyc connect to our api and fetch data 
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) => {
    let resStatus = 0;
    axios
      .post('/login', userData)
      .then((res) => {
        console.log(res)
        resStatus = res.status;
        return res.data;
      })
      .then(data => {
        if(resStatus !== 200) {
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: JSON.stringify(data)
          })
        }
        setAuthorizationHeader(data.token);
        dispatch(getUserData());
        dispatch({ type: userTypes.SET_AUTHENTICATED})
        history.push('/profile')
      }).catch(err => {
        console.log(err)
        dispatch({
          type: userTypes.SET_ERRORS,
          payload: err.response.data
        })
      })
};

export const signupUser = (signupData, history) => (dispatch) => {
  axios
    .post('signup', signupData)
    .then((res) => {
      console.log(res)
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: userTypes.CREATE_USER})
      history.push('/profile')
    }).catch(err => {
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: err.response.data
      })
    })
};

export const getUserData = () => (dispatch) => {
  axios
    .get('/user')
    .then((res) => {
      console.log(res)
      dispatch({
        type: userTypes.SET_USER,
        payload: res.data
      })
    })
    .catch((err) => console.log(err));
};


const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};