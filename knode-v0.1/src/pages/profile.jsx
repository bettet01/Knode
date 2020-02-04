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
import TabPanel from '@material-ui/core'

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
// Project WIPS: Tabs(questionable choice in feature name but whatever :/)  

return(
    <Grid container spacing={3}>
      <Grid item xs={3}>
       Test Test Test

      </Grid>
        
      <Grid item xs={9}>
      <AppBar position="static">
  <Tabs>
    <Tab label="Item One"  />
    <Tab label="Item Two"  />
    <Tab label="Item Three" />
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