import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

const Forecast = props => {
  const { classes, data } = props;

  const [forecast, setForecast] = React.useState(data);

  React.useEffect(() => {
    setForecast(data);
  }, [data]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.forecastWrapper}>
        {forecast && forecast.length > 0 && (
          <Fragment>
            <h3 className={classes.title}>Forecast</h3>
            <div>
              <div>
                {forecast.map(item => {
                  const innerDateWeather = item.weather.map(detail => (
                    <div className={classes.detailWrapper} key={Math.random()}>
                      <div className={classes.time}>
                        <Moment unix format="HH:mm">
                          {detail.dt}
                        </Moment>
                      </div>
                      <div className={classes.imgWrapper}>
                        <img
                          className={classes.weatherImg}
                          src={`http://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`}
                          alt={detail.main.description}
                        />
                      </div>
                      <p className={classes.maxTemp}>{Math.round(detail.main.temp_max - 273.15)}&deg;C</p>
                      <p className={classes.minTemp}>{Math.round(detail.main.temp_min - 273.15)}&deg;C</p>
                    </div>
                  ));
                  return (
                    <div key={Math.random()} className={classes.dateWrapper}>
                      <h3>{item.date}</h3>
                      {innerDateWeather}
                    </div>
                  );
                })}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  current: PropTypes.object
};

export default withStyles(styles)(Forecast);
