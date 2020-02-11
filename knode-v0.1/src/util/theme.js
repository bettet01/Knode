export default {
  palette: {
      primary: {
        light: '#5ce1e6',
        main: '#2a2ce8',
        dark: '#222629',
        contrastText: '#fff'
      },
      secondary: {
        light: '#5ce1e6',
        main: '#2a2ce8',
        dark: '#222629',
        contrastText: '#fff'
      }
    },
  classes: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: 'center'
    },
    image: {
      margin: '15px auto 15px auto',
      height: '175px',
    },
    pageTitle: {
      margin: '10px auto 10px auto'
    },
    textField: {
      margin: '10px auto 10px auto'
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress: {
      position: 'absolute'
    },
    invisibleSeparator: {
      border: 'none',
      margin: 4
    },
    visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20
    },
    paper: {
      padding: 20,
      marginTop: 35,
      margin: 'auto',
    }, 
    profileAppbar:{
      margin: 'auto',
      marginTop: '40px',
      width: '60%'
    },
    profilePaper: { 
      marginTop: 35,
      margin: 'auto',
      width: '350px',
      textAlign: 'center',
      minHeight: '100px'
    },
    profileTab: {
      margin: 'auto'
    },
    grid: {
      margin: 'auto'
    },
    avatarImage: {
      width: '200px',
      height: '200px',      
      margin: 'auto',
      marginTop: '40px',
      marginBottom: '40px' 
    },
    profileHeader: {
      marginTop: '50px',
      textAlign: 'center'
    },
    profile: {
      '& .image-wrapper': {
        textAlign: 'center',
        position: 'relative',
        '& button': {
          position: 'absolute',
          top: '80%',
          left: '70%'
        }
      },
      '& .profile-image': {
        width: 200,
        height: 200,
        objectFit: 'cover',
        maxWidth: '100%',
        borderRadius: '50%'
      },
      '& .profile-details': {
        textAlign: 'center',
        '& span, svg': {
          verticalAlign: 'middle'
        },
        '& a': {
          color: '#00bcd4'
        }
      },
      '& hr': {
        border: 'none',
        margin: '0 0 10px 0'
      },
      '& svg.button': {
        '&:hover': {
          cursor: 'pointer'
        }
      }
    },
    buttons: {
      textAlign: 'center',
      '& a': {
        margin: '20px 10px'
      }
    },
    appBar: {
      marginTop: '100px',
      marginBottom: '100px',
    },
  }
};