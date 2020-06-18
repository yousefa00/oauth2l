<<<<<<< HEAD
import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

// button component may need to add functionality of going forward or backwards or submitting
=======
/* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": false
    }
}]*/

import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import PropTypes from "prop-types";

/**
 * @param {string} props holds the name of the button
 * @return {Fragment} returns a button with names
 */
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
function Button(props) {
  return (
    <Fragment>
      <MDBBtn color="primary">{props.name}</MDBBtn>
    </Fragment>
  );
}
export default Button;
<<<<<<< HEAD
=======

Button.propTypes = {
  name: PropTypes.string,
};
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
