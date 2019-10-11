export const styles = theme => ({
    //Universal Style
    overlay: {
      position: 'fixed',
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0,.5)',
      top: 0,
      left: 0,
      zIndex: 1,
      transition: 'all 1s ease'
    },
    modal: {
      width: '80%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '5% 20px',
      borderRadius: 10,
      boxSizing: 'border-box',
      minWidth: 256,
      maxWidth: 600,
      zIndex: 1,
      [theme.breakpoints.up('sm')]:{
        width: '70%'
      },
      [theme.breakpoints.up('md')]:{
        width: '40%'
      }
    },
    btnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30
    },
    submitBtn: {
      padding: 10,
      borderRadius: 10,
      border: '2px solid black',
      background: 'transparent',
      fontSize: 16,
      fontWeight: 600,
      cursor: 'pointer',
      outline: 'none'
    }

  });
  