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
import TextField from '@material-ui/core/TextField'


import { Grid, Paper, Button, MenuList } from '@material-ui/core';

// set the styles from the global styles file
const styles = (theme) => ({
  form: {
    textAlign: 'center'
  },
  ...theme.classes
});

//styles for the dropdown MenuList
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


const CreateKnode = props => {
  const { classes} = props;
  const [knodeModules, setKnodeModules] = React.useState([])
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

  const handleSubmit = event => {
    event.preventDefault();
    console.log('it did it!')
  };

  return (
    <div>
      <Grid container className={classes.form}>
      <Grid item lg>
      <Paper style={{margin: '10px', marginLeft: 'auto', marginRight: 'auto', width: '90%', height: '90vh'}}>
        <br />
        <form onSubmit={handleSubmit}>
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
        <TextField style={{width: '300px'}} id="standard-basic" label="New Knode Name" />
        <br />
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
        <div style={{marginTop: '350px'}}>
        <FormControl>
          <InputLabel id='prerequisites'>Prerequisites</InputLabel>
          <Select
            style={{width: '300px'}}
            labelId='prerequisites'
            id='prerequisites-select' 
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
          <InputLabel id='future-connections'>Future Connections</InputLabel>
          <Select
            style={{width: '300px'}}
            labelId='future-connections'
            id='future-connections-select' 
            value={subjectObject}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button style={{marginTop: '20px'}} variant='contained' color='primary' type='submit' >Submit</Button>
        </div>
        </form>
      </Paper>
      </Grid>
      <Grid item lg>
      <Paper style={{margin: '10px', marginRight: 'auto', marginLeft: 'auto', width: '90%', height: '90vh'}}>

      </Paper>
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
