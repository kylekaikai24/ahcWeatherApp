export const styles = theme => ({
  //Universal Style
  wrapper: {
    width: "100%",
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    [theme.breakpoints.up("sm")]: {
      fontSize: 25
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30
    }
  },
  forecastWrapper: {
    padding: '0 10px'
  },
  dateWrapper: {
    margin: '8px 0'
  },
  detailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginLeft: 7,
    alignItems: 'center',
    [theme.breakpoints.up("md")]: {
    borderBottom: '1px solid lightgray'
    }
  },
  time: {
    width: "45%"
  },
  imgWrapper: {
    height: 35,
    width: '25%'
  },
  weatherImg: {
    height: 'inherit'
  },
  maxTemp: {
    width: '15%'
  },
  minTemp: {
    width: '15%',
    color: 'gray'
  }
});
