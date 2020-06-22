import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import CheckboxList from "./components/Checklist";

/**
 *
 * @return {div} returns the page that contains the ability to choose the scopes
 */
function Scopes() {
    const [scope, setScope] = useState("");

    const handleSubmit = (e) => {
        return [scope];
    };

    return ( <
        div className = "top" >
        <
        div className = "shadow-box-example z-depth-2" >
        <
        MDBContainer >
        <
        form onSubmit = { handleSubmit } >
        <
        MDBCol > { " " } <
        p className = "h5 text-center mb-4" > Choose token type < /p> <
        /MDBCol>

        <
        MDBRow >
        <
        MDBCol > { " " } <
        CheckboxList >
        onChange = {
            (e) => setScope(e.target.value) } <
        /CheckboxList> <
        /MDBCol> <
        /MDBRow>

        <
        div className = "next" >
        <
        MDBBtn outline color = "info"
        type = "submit" >
        Submit <
        /MDBBtn> <
        /div> <
        /form> <
        /MDBContainer> <
        /div> <
        /div>
    );
}

export default Scopes;