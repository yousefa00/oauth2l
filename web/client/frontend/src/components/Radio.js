import React from 'react';

function Radio(props) {
  return (
    <div className="custom-control custom-radio">
      <input type = "radio"
        name = {props.name}
        value ={props.value}
        className= "custom-control-input"
        id= {props.id}
        onChange={props.changed}/>
      <label className="custom-control-label" htmlFor={props.id}>{props.value}</label>
    </div>
  );
}


export default Radio;
