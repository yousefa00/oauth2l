import React, { Fragment } from 'react';

export default function Scopes(props){

    return(
    <div>
        <h1>Message received</h1>
        <h1>{props.type} </h1>
        <h1>{props.form }</h1>
        
    </div>
        );
}