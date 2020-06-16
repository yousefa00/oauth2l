import React, { Fragment } from 'react';
import {MDBBtn} from 'mdbreact';

//button component may need to add functionality of going forward or backwards or submitting
function Button(props){
    return(
        <Fragment>
            <MDBBtn color = "primary">{props.name}</MDBBtn>
        </Fragment>
    );

}
export default Button;