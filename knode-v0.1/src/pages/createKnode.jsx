import React from 'react'
import PropTypes from 'prop-types'

// Redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

// Material Ui stuff
import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import DraftsIcon from '@material-ui/icons/Drafts';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssessmentIcon from '@material-ui/icons/Assessment';


import { Grid } from '@material-ui/core';

// set the styles from the global styles file
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const styles = (theme) => ({
  ...theme.classes
});


const CreateKnode = props => {
  const { classes} = props;
  const [subjectObject, setSubjectObject] =  React.useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = event => {
    setSubjectObject(event.target.value);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container className={classes.form}>
      <Grid item lg>
      <FormControl>
        <InputLabel id='subject'>Subject</InputLabel>
        <Select
          style={{width: '300px'}}
          labelId='subject'
          id='subject-select' 
          value={subjectObject}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel id='category'>Category</InputLabel>
        <Select
          style={{width: '300px'}}
          labelId='category'
          id='category-select' 
          value={subjectObject}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br/ >
      <Fab 
        onClick={handleClick}
        style={{marginTop: '20px'}}
        color="primary"
        aria-label="add"
        aria-controls="customized-menu"
        aria-haspopup="true"
      >
        <AddIcon />
      </Fab>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AddToQueueIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Description" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Example" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AssessmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Practice" />
        </StyledMenuItem>
      </StyledMenu>
      </Grid>
      <Grid item lg>
      Other Side
      </Grid>
      </Grid>
    </div>
  )
}


CreateKnode.propTypes = {

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
)(withStyles(styles)(CreateKnode));
