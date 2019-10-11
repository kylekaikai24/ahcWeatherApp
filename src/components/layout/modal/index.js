import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeather, getCurrentWeather } from "../../../actions/weather";
import { withStyles } from "@material-ui/core";

import { styles } from "./style";

import Dropdown from "../dropdown";

import cityData from "../../../data/city.list.min.json";

const Modal = props => {
  const {
    classes,
    getWeather,
    getCurrentWeather,
    setOpenModal,
    countryArr
  } = props;

  //useState
  const [cityName, setCity] = React.useState();
  const [country, setCountry] = React.useState();
  //error message
  const [error, setError] = React.useState();
  const [showError, setShowError] = React.useState(false);

  //function: remake city's array's object to match pass-in key value pair
  const remakeCity = () => {
    let remake = [];
    cityData.map(item => {
      let newItem = {};
      if (country && item.country === country) {
        newItem.name = item.name;
        newItem.value = item.name;
        remake.push(newItem);
      }
    });
    return remake;
  };

  //function: submit to action and reducer
  const onSubmit = async (cityName, country) => {
    if (typeof cityName != "undefined" && typeof country != "undefined") {
      getWeather(cityName, country);
      getCurrentWeather(cityName, country);
      setOpenModal(false);
      setCity();
      setCountry();
    } else {
      setError('Please select both country and city');
      setShowError(true);
      setTimeout(() => {setShowError(false)}, 3000);
    }
  };

  //inline style for library icon
  const styles = {
    closeBtn: {
      position: "absolute",
      top: 9,
      right: 13,
      fontSize: 29,
      cursor: "pointer"
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <i class="material-icons"
          style={styles.closeBtn}
          onClick={() => setOpenModal(false)}>
          close</i>
        <Dropdown
          setValue={setCountry}
          value={country}
          data={countryArr}
          dropdownName="country"
          disabled={true}
          defaultText="Please select a Country"
          dropdownTitle="Country"
        />
        <Dropdown
          setValue={setCity}
          value={cityName}
          data={remakeCity()}
          dropdownName="city"
          disabled={true}
          defaultText="Please select a City"
          dropdownTitle="City"
        />
        {showError && (
            <p style={{color: 'red'}}>{error}</p>
          )
        }
        <div className={classes.btnWrapper}>
          <button
            onClick={e => {
              onSubmit(cityName, country)
            }}
            className={classes.submitBtn}
          >
            Show weather
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  getWeather: PropTypes.func.isRequired,
  getCurrentWeather: PropTypes.func.isRequired
};

export default connect(
  null,
  { getWeather, getCurrentWeather }
)(withStyles(styles)(Modal));
