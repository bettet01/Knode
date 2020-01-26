import React from 'react';
import './App.css';

// used to consume our apis 
import axios from 'axios'

// React-Router -- used to add url paths to the app
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//MaterialUI -- used for prebuild components and styling
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Import of our custom MUI theme
import defaultTheme from './util/theme' 

// Redux  -- used for state mangement at a global level to avoid prop-drilling
import { Provider } from 'react-redux';
import store from './redux/store';

//Pages -- Pages for the App created by us
import development from './pages/development.jsx';
import Login from './pages/login.jsx'
import signup from './pages/signup.jsx'



axios.defaults.baseURL =
  'https://us-central1-knode-795ef.cloudfunctions.net/api';

const theme = createMuiTheme(defaultTheme)

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Provider store={store} >
        <div className='container'>
          <Router>
            <Route exact path='/' component={development} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={signup} />
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;




