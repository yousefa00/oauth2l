import React from "react";
import "./App.css";
import Credentials from "./components/Credentials";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

function App() {
  return (
    <div className="App">
      <MDBNavbar color="blue">
        <MDBNavbarBrand>
          <img
            src={process.env.PUBLIC_URL + "/clogo.png"}
            width="250"
            alt="This is a logo for Google Cloud"
          />
        </MDBNavbarBrand>
      </MDBNavbar>

      <Credentials />
    </div>
  );
}

export default App;
