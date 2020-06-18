<<<<<<< HEAD
=======
/* eslint "require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": false
    }
}]*/

>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
import React, { useState } from "react";
import Button from "./Button";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Radio from "./Radio";

<<<<<<< HEAD
function Credentials() {
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const formatChange = (e) => setFormat(e.target.value); // refactoring code
  const typeChange = (e) => setType(e.target.value); // refactoring code
=======
/**
 *
 * @return {div} returns the page that contains the ability to choose the type
 */
function Credentials() {
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.format.value === "Header" && e.target.type.value === "JWT") {
      alert("JWT type and Header format are not allowed!");
    } else {
<<<<<<< HEAD
      console.log(e.target.type.value);
      console.log(e.target.format.value);
=======
      // send it to scopes
      return [type, format]; // holding it to remove unused vars error
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
    }
  };

  return (
    <div className="top">
      <div className="shadow-box-example z-depth-2">
        <MDBContainer>
          <form onSubmit={handleSubmit}>
            <MDBCol>
              {" "}
              <p className="h5 text-center mb-4">Choose token type </p>
            </MDBCol>
            <fieldset id="type">
              <MDBRow>
                <MDBCol>
                  <Radio
                    name="type"
                    value="OAuth"
                    id="defaultGroupExample1"
<<<<<<< HEAD
                    onChange={typeChange}
=======
                    onChange={(e) => setType(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />
                </MDBCol>
                <MDBCol>
                  {" "}
                  <Radio
                    name="type"
                    value="JWT"
                    id="defaultGroupExample2"
<<<<<<< HEAD
                    onChange={typeChange}
=======
                    onChange={(e) => setType(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />
                </MDBCol>
              </MDBRow>
            </fieldset>

            <MDBCol>
              {" "}
              <p className="h5 text-center mb-4">Choose token format </p>
            </MDBCol>
            <fieldset id="format">
              <MDBRow>
                <MDBCol>
                  {" "}
                  <Radio
                    name="format"
                    value="Bare"
                    id="defaultGroupExample3"
<<<<<<< HEAD
                    onChange={formatChange}
=======
                    onChange={(e) => setFormat(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />
                </MDBCol>
                <MDBCol>
                  <Radio
                    name="format"
                    value="Header"
                    id="defaultGroupExample4"
<<<<<<< HEAD
                    onChange={formatChange}
=======
                    onChange={(e) => setFormat(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />
                </MDBCol>
              </MDBRow>
              &nbsp;&nbsp;&nbsp;
              <MDBRow>
                <MDBCol>
                  <Radio
                    name="format"
                    value="JSON"
                    id="defaultGroupExample5"
<<<<<<< HEAD
                    onChange={formatChange}
=======
                    onChange={(e) => setFormat(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />
                </MDBCol>
                <MDBCol>
                  <Radio
                    name="format"
                    value="JSON_Compact"
                    id="defaultGroupExample6"
<<<<<<< HEAD
                    onChange={formatChange}
=======
                    onChange={(e) => setFormat(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                  />{" "}
                </MDBCol>
              </MDBRow>
              &nbsp;&nbsp;&nbsp;
              <div id="next"></div>
              <MDBCol>
                <Radio
                  name="format"
                  value="Pretty"
                  id="defaultGroupExample7"
<<<<<<< HEAD
                  onChange={formatChange}
=======
                  onChange={(e) => setFormat(e.target.value)}
>>>>>>> dc9941067779d71ac2bee2b42a90e5c8007cf9de
                />
              </MDBCol>
            </fieldset>
            <div className="btn1">
              <MDBBtn outline color="info" type="submit">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBContainer>
      </div>
      <div style={{ float: "right" }} className="next">
        <Button name="Next"></Button>
      </div>
    </div>
  );
}

export default Credentials;
