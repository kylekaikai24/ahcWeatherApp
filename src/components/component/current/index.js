import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import { styles } from "./style";

const Current = props => {
  const { classes, data, style, degToCompass, background } = props;

  const [current, setCurrent] = React.useState(data);

  React.useEffect(() => {
    setCurrent(data);
  }, [data]);

  return (
    <div
      className={classes.background}
      style={{
        ...{
          background:
            background !== "undefined"
              ? `linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${background}) no-repeat center center`
              : "rgba(0,0,0,.3)",
          backgroundSize: background && "cover"
        },
        ...style
      }}
    >
      <div className={classes.overlay}></div>
      <div className={classes.wrapper}>
        <div>
          {current && (
            <Fragment>
              <h3 className={classes.title}>Current</h3>
              <div className={classes.currentWrapper}>
                <div className={classes.imgWrapper}>
                  <img
                    src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    alt={current.main.description}
                    className={classes.weatherImg}
                  />
                </div>
                <div className={classes.detailWrapper}>
                  <p className={classes.temperature}>
                    {Math.round(current.main.temp - 273.15)}
                    <span>&deg;C</span>, {current.weather[0].main}
                  </p>
                  <p className={classes.description}>
                    {current.weather[0].description}
                  </p>
                  <p className={classes.humidity}>
                    Humidity: {current.main.humidity}
                  </p>
                  <p className={classes.wind}>
                    {degToCompass(current.wind.deg)} {current.wind.speed} m/s
                  </p>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

Current.propTypes = {
  current: PropTypes.object
};

export default withStyles(styles)(Current);
