import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";

import { styles } from "./style";

const NotFound = props => {
  const { classes } = props;

  const styles = {
      icon: {
          fontSize: 35,
          color: 'red'
      }
  }
  return (
    <Fragment>
      <h1 className={classes.title}>
      <i class="material-icons" style={styles.icon}>error</i><span>Page Not Found</span></h1>
      <p className={classes.p}>Sorry this page does not exist~</p>
    </Fragment>
  );
};

export default withStyles(styles)(NotFound);
