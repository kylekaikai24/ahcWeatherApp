import React, { Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { styles } from "./style";

import Modal from "../../layout/modal";
import Current from "../../component/current";
import Forecast from "../../component/forecast";
import Spinner from "../../layout/spinner";
import { getWeather, getCurrentWeather } from "../../../actions/weather";

const Dashboard = props => {
  const {
    classes,
    weather: { city, forecast, current, loading },
    getWeather,
    getCurrentWeather
  } = props;

  //useState
  //weather array with group by date
  const [remakeWeather, setRemakeWeather] = React.useState([]);
  //open modal
  const [openModal, setOpenModal] = React.useState(false);
  //remake country data object key
  const [countryArr, setCountryArr] = React.useState([]);
  //set background picture
  const [cityBackground, setCityBackground] = React.useState();

  //useEffect
  //remake weather array's object item in object which is group by date
  React.useEffect(() => {
    if (forecast) {
      const groups = forecast.reduce((groups, day) => {
        const date = moment.unix(day.dt).format("ddd MMM DD YYYY");
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(day);
        return groups;
      }, {});

      const weatherArrays = Object.keys(groups).map(date => {
        return {
          date,
          weather: groups[date]
        };
      });
      setRemakeWeather(weatherArrays);
    }
  }, [city, forecast]);

  //remake country array's object to new value key pair for easy manage
  React.useEffect(() => {
    const remakeCountry = async () => {
      let res = await fetch(
        `https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/slim-2/slim-2.json`
      );
      let data = await res.json();
      let remakeData = [];
      data.map(item => {
        let newItem = {};
        newItem.value = item["alpha-2"];
        newItem.name = item["name"];
        remakeData.push(newItem);
      });
      setCountryArr(remakeData);
    };
    remakeCountry();
  }, []);

  //get default data
  React.useEffect(() => {
    getWeather("Hong Kong", "HK");
    getCurrentWeather("Hong Kong", "HK");
  }, [getWeather, getCurrentWeather]);

  //change background picture when changing cities
  React.useEffect(()=>{
    const fetchPhoto = async (cityName, country) => {
      let url = `https://api.pexels.com/v1/search`;
      url += `?query=${cityName}%20${country}&per_page=1&page=1`;
      let res = await fetch(url, {
        headers: new Headers({
          Authorization: "563492ad6f9170000100000117dfc351358447c1b200fc4cf001f090"
        })
      });
      let data = await res.json();
      if (data.photos.length > 0) {
        setCityBackground(data.photos[0].src.landscape)
      }
    };
    if (current) {
      fetchPhoto(city, current.sys.countryName)  
    }
    fetchPhoto(city)
  }, [city]);

  //function: calculate wind degree
  const degToCompass = num => {
    let value = parseInt(num / 22.5 + 0.5);
    const direction = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ];
    return direction[value % 16];
  };

  return (
    <div className={classes.wrapper}>
      {openModal && (
        <Modal setOpenModal={setOpenModal} countryArr={countryArr} />
      )}
      <div className={classes.innerWrapper}>
        <div className={classes.btnWrapper}>
          <button
            className={classes.changeBtn}
            onClick={() => setOpenModal(true)}
          >
            Change Location
          </button>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className={classes.locationWrapper}>
              {city && (
                <p className={classes.location}>
                  <span className={classes.cityName}>{city}</span>
                  <span className={classes.countryName}>
                    , {current && current.sys.countryName}
                  </span>
                </p>
              )}
            </div>
            <div>
              <Current
                data={current}
                degToCompass={degToCompass}
                background={cityBackground}
              />
            </div>
            <div>
              <Forecast data={remakeWeather} degToCompass={degToCompass} />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  forecast: PropTypes.object,
  current: PropTypes.object,
  getWeather: PropTypes.func.isRequired,
  getCurrentWeather: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getWeather, getCurrentWeather }
)(withStyles(styles)(Dashboard));
