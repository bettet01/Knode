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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel, { Card } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar'


// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';


// set the styles from the global styles file
const styles = (theme) => ({
  ...theme.classes
});

const Profile = props =>{ 
// Project: Begin UI for Profile Page 
// Source: For Wireframe Plase Vist https://www.canva.com/teams
// Project WIPS: Avatar and Bio Page  

const { classes} = props;

return(
    <Grid container spacing={3}>
      <Grid className={classes.grid} item xs={3}>
       <h5 className={classes.profileHeader}> Profile Picture and Bio Section </h5>
      <Avatar className={classes.avatarImage} >K </Avatar> 
      <Paper className={classes.profilePaper} elevation={5}> This Section Will Hold the Bio Page </Paper>
      </Grid>   
      <Grid item xs={9}>
      <AppBar className={classes.profileAppbar} position="static">
  <Tabs>
    <Tab className={classes.profileTab} label="Learning "  />
    <Tab className={classes.profileTab} label="Created"  />
    <Tab className={classes.profileTab} label="Metrics" />
  </Tabs>
</AppBar>

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
)(withStyles(styles)(Profile));