export const styles = theme => ({
  //Universal Style
  background: {
    position: "relative",
    minHeight: "100%",
    width: "100%",
    objectFit: 'cover',
    objectPosition: 'center'
  },
  wrapper: {
    width: "100%",
    borderBottom: "1px solid lightgray",
    padding: "30px 0 20px 10px",
    boxSizing: "border-box"
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    marginTop: 0,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontSize: 25
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30
    }
  },
  currentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start"
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start"
    }
  },
  imgWrapper: {
    width: "35%"
  },
  weatherImg: {
    width: 120
  },
  detailWrapper: {
    width: "50%"
  },
  temperature: {
    fontWeight: 700,
    margin: 5,
    color: "white",
    [theme.breakpoints.up("sm")]: {
      fontSize: 20
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25
    }
  },
  description: {
    fontWeight: 500,
    color: "white",
    margin: 5
  },
  humidity: {
    fontWeight: 500,
    color: "white",
    margin: 5
  },
  wind: {
    fontWeight: 500,
    color: "white",
    margin: 5
  }
});
