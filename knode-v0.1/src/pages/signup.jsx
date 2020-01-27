import React, { Component, useState } from 'react';

// Knode Logo import
import AppIcon from '../images/whiteLogo.png'

// MUI Stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';


// set the styles from the global styles file
const styles = (theme) => ({
  ...theme.classes
});


const Signup = props => {
  const [signupData, setSignupData] = useState({
    email: '',
    handle: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    phone: ''
  });

const handleSubmit = (event) => {
  event.preventDefault();
  const sendData = {
    email: signupData.email,
    handle: signupData.handle,
    password: signupData.password,
    confirmPassword: signupData.confirmPassword,
    birthdate: signupData.birthdate,
    phone: signupData.phone
  };
  props.signupUser(sendData, props.history);
};


  const handleChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value
    });
  };


  return(
    <Grid container spacing={3}>
      <Grid item md>
        <Paper elevation={3} style={{ textAlign: "center", marginTop: "20%"}}>
        <img src={AppIcon} alt="logo" style={{ height: 250 }}/>
        <Typography varient="main" style={{ padding: 30, width: "75%", marginLeft: "auto", marginRight: "auto"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        </Paper>
      </Grid>
      <Grid item md>
        <form onSubmit={handleSubmit} style={{ marginTop: "20%",marginLeft:"85px"}}>
          <TextField onChange={handleChange} id="email" label="Email" type="email" name="email" /> 
          <br/>
          <TextField onChange={handleChange} id="handle" label="Username" type="username" name="handle" /> 
          <br/>
          <TextField onChange={handleChange} id="password" label="Password" type="password" name="password" />
          <br/>
          <TextField onChange={handleChange} id="confirmPassword" label="Confirm Password" type="password" name="confirmPassword" />
          <br/>
          <TextField onChange={handleChange} id="birthdate" label="Birthdate" type="birthdate" name="birthdate" />
          <br/>
          <TextField  onChange={handleChange} id="phone" label="Phone" type="text" name="phone" />
          <br/>
          <br/>
          <Button
                type="submit"
                variant="contained"
                color="primary"
                
              >
                Get Started
              </Button>
        </form>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Signup));
