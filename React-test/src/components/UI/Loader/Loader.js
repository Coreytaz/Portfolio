import React from "react";
import classes from "./Loader.css";

const Loader = (props) => (
    <div className={classes.center}>
  <div className={classes.lds_spinner}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  </div>
);

export default Loader;
