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
  textfield: {
    width: '90%'
  },
  paper: {
    textAlign: "center", 
    marginTop: "20%", 
    marginLeft: "30px", 
    marginRight: "30px"
  },
  logo: {
    height: 250,
  },
  loginBox: {
    margin: '20%', 
    width: '450px', 
    height: '412px'
  },
  signupButton: {
    background: 'linear-gradient(45deg, #2a2ce8 30%, #5ce1e6 90%)',
    marginLeft: '30%', 
    marginRight: 'auto', 
    marginTop: '20px'
  },
  ...theme.classes
});


const Signup = props => {
  const { classes } = props;
  const [signupData, setSignupData] = useState({
    email: '',
    handle: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    phone: '',
    errors: {}
  });

  React.useEffect(() => {
    setSignupData({
      ...signupData,
      errors: props.UI.errors
    })
    let errors = props.UI
  }, [props.UI] );

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
        <Paper elevation={3} className={classes.paper}>
        <img src={AppIcon} alt="logo" className={classes.logo} />
        <Typography varient="main" style={{ padding: 30, width: "75%", marginLeft: "auto", marginRight: "auto"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        </Paper>
      </Grid>
      <Grid item md>
        <Paper className={classes.loginBox} >
          <form onSubmit={handleSubmit} style={{ marginTop: "70px",marginLeft: '35px'}}>
            <TextField 
            onChange={handleChange} 
            style={{ marginTop: "20px", width: '90%'}} 
            id="email" 
            label="Email" 
            type="email" 
            name="email"
            helperText={signupData.errors.email}
            error={signupData.errors.email ? true : false}
            /> 
            <br/>
            <TextField 
            onChange={handleChange} 
            className={classes.textfield} 
            id="handle" 
            label="Username" 
            type="username" 
            name="handle"
            helperText={signupData.errors.handle}
            error={signupData.errors.handle ? true : false}
            /> 
            <br/>
            <TextField
            onChange={handleChange} 
            className={classes.textfield} 
            id="password" 
            label="Password" 
            type="password" 
            name="password" 
            helperText={signupData.errors.password}
            error={signupData.errors.password ? true : false}
            />
            <br/>
            <TextField 
            onChange={handleChange} 
            className={classes.textfield} 
            id="confirmPassword" 
            label="Confirm Password" 
            type="password" 
            name="confirmPassword" 
            helperText={signupData.errors.confirmPassword}
            error={signupData.errors.confirmPassword ? true : false}
            />
            <br/>
            <TextField 
            onChange={handleChange} 
            className={classes.textfield} 
            id="birthdate" 
            label="Birthdate" 
            type="birthdate" 
            name="birthdate" />
            <br/>
            <TextField 
            onChange={handleChange} 
            className={classes.textfield} 
            id="phone" 
            label="Phone" 
            type="text" 
            name="phone" 
            />
            <br/>
            <br/>
            <Button
                  className={classes.signupButton}
                  type="submit"
                  variant="contained"
                  color="primary"
                  
                >
                  Get Started
                </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Signup));
