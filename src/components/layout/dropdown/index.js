import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { styles } from "./style";

const Dropdown = props => {
  const {
    classes,
    value,
    setValue,
    data,
    dropdownName,
    disabled,
    defaultText,
    dropdownTitle
  } = props;

  const styles = {
    dropdownArrow: {
      position: "absolute",
      top: '50%',
      transform: 'translateY(-50%)',
      right: 10,
      color: "gray",
      zIndex: -1,
      fontSize: 25
    }
  };
  
  return (
    <div className={classes.dropdownWrapper}>
      <h2 className={classes.title}>{dropdownTitle}</h2>
      <div className={classes.selectWrapper}>
        {/* <i class="fas fa-chevron-down" style={styles.dropdownArrow}></i> */}
        <i class="material-icons" style={styles.dropdownArrow}>keyboard_arrow_down</i>
        <select
          name={dropdownName}
          className={classes.select}
          onChange={e => setValue(e.target.value)}
          value={value}
        >
          {disabled && (
            <option value="" disabled selected>
              {defaultText}
            </option>
          )}
          {data &&
            data.length > 0 &&
            data.map(item => (
              <option key={Math.random()} value={item.value}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  dropdownTitle: PropTypes.string,
  data: PropTypes.array.isRequired,
  dropdownName: PropTypes.string.isRequired,
  setValue: PropTypes.func
};

export default withStyles(styles)(Dropdown);
