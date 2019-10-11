import React from "react";
import SpinnerGif from "../../../img/spinner.gif";

const Spinner = props => {
  return (
    <div>
      <p style={{textAlign: 'center'}}>
        <img src={SpinnerGif} alt="" />
      </p>
    </div>
  );
};

Spinner.propTypes = {};

export default Spinner;
