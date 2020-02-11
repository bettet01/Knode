import React from 'react';
import './App.css';

// Authroute is a util Route that check to make sure the user is authenticated
import Authroute from './util/AuthRoute'
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

//Components -- stand alone items that can be added to pages as needed
import Navbar from './components/navbar'

//Pages -- Pages for the App created by us
import development from './pages/development.jsx';
import login from './pages/login.jsx'
import signup from './pages/signup.jsx'
import profile from './pages/profile.jsx'
import home from './pages/home'
import CreateKnode from './pages/createKnode'





axios.defaults.baseURL =
  'https://us-central1-knode-795ef.cloudfunctions.net/api';

const theme = createMuiTheme(defaultTheme)

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Provider store={store} >
        <div className='container'>
          <Router>
            <Navbar />
            <Route exact path='/' component={development} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Authroute exact path="/profile" component={profile} />
            <Authroute exact path='/home' component={home}/>
            <Authroute exact path='/create' component={CreateKnode} />
            <Authroute exact path='/createknode' />
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;




