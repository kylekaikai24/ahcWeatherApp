export const styles = theme => ({
  //Universal Style
  wrapper: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 50
  },
  innerWrapper: {
    width: "100%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
      maxWidth: 898
    }
  },
  btnWrapper: {
    width: "100%",
    textAlign: "right",
    paddingRight: 10,
    boxSizing: "border-box"
  },
  changeBtn: {
    padding: "6px 9px",
    borderRadius: 10,
    border: "1.5px solid black",
    background: "transparent",
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    outline: 'none',
    [theme.breakpoints.up("sm")]: {
      fontSize: 13
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 15
    }
  },
  locationWrapper: {
    borderBottom: "1px solid lightgray"
  },
  location: {
    paddingLeft: 10
  },
  cityName: {
    fontSize: 25,
    fontWeight: 800,
    [theme.breakpoints.up("sm")]: {
      fontSize: 30
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 35
    }
  },
  countryName: {
    fontSize: 17,
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: 19
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 21
    }
  }
});
