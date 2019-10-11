export const styles = theme => ({
  //Universal Style
  dropdownWrapper: {
    width: "100%",
    margin: "30px 0"
  },
  title: {
    fontSize: 18,
    [theme.breakpoints.up('sm')]:{
      fontSize: 21
    },
    [theme.breakpoints.up('md')]:{
      fontSize: 25
    }
  },
  select: {
    width: "100%",
    color: "gray",
    padding: "10px 0px 10px 10px",
    borderRadius: 10,
    fontSize: 15,
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    background: 'transparent',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]:{
      fontSize: 17
    },
    [theme.breakpoints.up('md')]:{
      fontSize: 19
    }
  },
  selectWrapper: {
      position: 'relative',
      width: '100%'
  }
});
