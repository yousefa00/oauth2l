<<<<<<< HEAD
import React from "react";
import { MDBContainer, MDBAlert } from "mdbreact";

=======
/* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": false
    }
}]*/

import React from "react";
import { MDBContainer, MDBAlert } from "mdbreact";

/**
 * @return {MDBContainer} returns webapp as a whole
 */
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
function AlertP() {
  return (
    <MDBContainer>
      <MDBAlert color="warning">
        <strong>JWT</strong> type and a <strong> Header</strong> format cannot
        be chosen as a pair
      </MDBAlert>
    </MDBContainer>
  );
}

export default AlertP;
