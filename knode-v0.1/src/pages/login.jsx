import React, { Component, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/nobgLogo.png';
import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


// set the styles from the global styles file
const styles = (theme) => ({
  form: {
    textAlign: 'center'
  },
  image: {
    margin: '15px auto 15px auto',
    height: '175px',
  },
  pageTitle: {
    color: 'white',
    margin: '10px auto 10px auto'
  },
  paper: {
    padding: 20,
    marginTop: 35,
    margin: 'auto',
  }, 
  textField: {
    margin: '10px auto 10px auto'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  loginButton: {
    background: 'linear-gradient(45deg, #2a2ce8 30%, #5ce1e6 90%)',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative'
  },
    ...theme.classes
  });

const Login = props => {
    const [ loginData, setLoginData] = useState({
        email: '',
        password: '',
        errors: {}
    })

    const { classes } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
          email: loginData.email,
          password: loginData.password
        };
        props.loginUser(userData, props.history);
      };

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Grid container className={classes.form}>
        <Grid item md />
        <Grid item sm>
          <img src={AppIcon} alt="logo" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <Paper className={classes.paper}>
            <form noValidate className={classes.form} onSubmit={handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                className={classes.textField}
                helperText={loginData.errors.email}
                error={loginData.errors.email ? true : false}
                value={loginData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                className={classes.textField}
                helperText={loginData.errors.password}
                error={loginData.errors.password ? true : false}
                value={loginData.password}
                onChange={handleChange}
                fullWidth
              />
              {loginData.errors.general && (
                <Typography variant="body2" className={classes.customError}>
                  {loginData.errors.general}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.general.button, classes.loginButton}
              >
                Login
              </Button>
              <br />
              <small>
                dont have an account ? sign up <Link to="/signup">here</Link>
              </small>
            </form>
          </Paper>
        </Grid>
        <Grid item md />
      </Grid>
    );
  }

  const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });

  const mapActionsToProps = {
    loginUser
  };

  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(Login));
