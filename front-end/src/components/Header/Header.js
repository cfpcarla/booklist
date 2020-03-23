import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import styles from "../../assets/jss/material-kit-react/components/headerStyle.js"

export default function Header(props) {
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.chanegeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowScroll = window.pageYOffset;
    if (windowScroollTop > changeColorOnScroll.height) {
      document.bodynpm
        .getElementByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = className({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [clases.fixed]: fixed
  })
  const brandComponent = <Button className={classes.title}>{brand}</Button>
  return (
    <AppBar style={{ height: '7em' }} className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftlinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          <img style={{ height: "8em", width: "auto" }} src={logo} />
        </div>
        {rightLinks}
      </Toolbar>
    </AppBar>
  )
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
