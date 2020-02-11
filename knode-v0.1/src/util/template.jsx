import React from 'react'
import PropTypes from 'prop-types'

// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';


import withStyles from '@material-ui/core/styles/withStyles';



// set the styles from the global styles file
const styles = (theme) => ({
  ...theme.classes
});


const template = props => {
  const { classes} = props;
  return (
    <div>
      Template
    </div>
  )
}


template.propTypes = {

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
)(withStyles(styles)(template));
