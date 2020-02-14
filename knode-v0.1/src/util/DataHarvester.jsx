import React from 'react'

// Redux stuff
import { connect } from 'react-redux';
import { getSubjects } from '../redux/actions/dataActions';


import withStyles from '@material-ui/core/styles/withStyles';



// set the styles from the global styles file
const styles = (theme) => ({
  ...theme.classes
});


const DataHarvester = props => {

  React.useEffect(() => {
    props.getSubjects();
  }, [] )

  const { classes} = props;
  return (
    <div>
    </div>
  )
}



const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data
});

const mapActionsToProps = {
  getSubjects
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(DataHarvester));
