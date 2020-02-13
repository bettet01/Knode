import React from 'react'

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
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { Grid, Paper, Button, Typography } from '@material-ui/core';

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
          <Select
            style={{width: '300px'}}
            labelId='prerequisites'
            id='prerequisites-select' 
            value={subjectObject}
            onChange={handleChange}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={'1'} onChange={handleChange} value="gilad" />}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={<Checkbox checked={'2'} onChange={handleChange} value="jason" />}
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={'3'} onChange={handleChange} value="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <Select
            style={{width: '300px'}}
            labelId='Future Connections'
            id='prerequisites-select' 
            value={subjectObject}
            onChange={handleChange}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={'1'} onChange={handleChange} value="gilad" />}
                label="Gilad Gray"
              />
              <FormControlLabel
                control={<Checkbox checked={'2'} onChange={handleChange} value="jason" />}
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={'3'} onChange={handleChange} value="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
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
        <div className={classes.descriptionBox}>
          <br />
          <Paper style={{margin: '20px', marginTop: '10px', marginBottom: '10px', backgroundColor: '#f4f4f4'}} >
            <Typography style={{paddingTop: '10px', textAlign: 'center'}} >Description</Typography>
            <br />
            <TextField
            style={{width: '90%', paddingBottom: '20px'}}
            id="outlined-multiline-static"
            multiline
            rows="4"
            variant="outlined"
          />
          </Paper>
        </div>
        <div className={classes.ExampleBox}>
          <br />
          <Paper style={{margin: '20px', marginTop: '10px', marginBottom: '10px', backgroundColor: '#f4f4f4'}} >
            <Typography style={{paddingTop: '10px', textAlign: 'center'}} >Example</Typography>
            <br />
            <TextField
            style={{width: '90%', paddingBottom: '20px'}}
            id="outlined-multiline-static"
            multiline
            rows="4"
            variant="outlined"
          />
          </Paper>
        </div>
        <div className={classes.practiceBox}>
          <br />
          <Paper style={{margin: '20px', marginTop: '10px', marginBottom: '10px', backgroundColor: '#f4f4f4'}} >
            <Typography style={{paddingTop: '10px', textAlign: 'center'}} >Practice</Typography>
            <br />
            <TextField
            style={{width: '90%', paddingBottom: '20px'}}
            label='Question'
            id="outlined-multiline-static"
            multiline
            variant="outlined"
          />
          <br />
          <TextField
            style={{width: '100px', paddingBottom: '20px'}}
            label='Answer'
            id="outlined-multiline-static"
            multiline
            variant="outlined"
          />
          </Paper>
        </div>
      </Paper>
      </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(CreateKnode));
