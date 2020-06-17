import React,{useState} from 'react';
import Button from './Button';
import { MDBContainer, MDBRow,MDBCol,MDBBtn,MDBIcon} from 'mdbreact';


function Credentials(){
   const [type,setType] = useState("");
   const [format, setFormat] = useState("");
   const formatChange = (e) => setFormat(e.target.value); //refactoring code 
   const typeChange = (e) => setType(e.target.value); //refactoring code 
   


   const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.format.value === "Header" && e.target.type.value === "JWT"){ 
         alert('These two values cannot be paired together, please change them');//don't send the values to the next page and ask the user to change them

      }else{
      console.log(e.target.type.value);
      console.log(e.target.format.value);
      }
   }

   return (
   <div className = "top">
    <div className= "shadow-box-example z-depth-2">
    <MDBContainer>
    <form onSubmit={handleSubmit}> 
    
    <MDBCol> <p className= "h5 text-center mb-4">Choose token type </p>
    </MDBCol>
    <fieldset id='type'>
    <MDBRow>
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "type" value = "OAuth" className= "custom-control-input" id="defaultGroupExample1" onChange={typeChange}/><label className="custom-control-label" for="defaultGroupExample1">OAuth</label></div></MDBCol>	
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "type" value = "JWT"  className= "custom-control-input" id="defaultGroupExample2"onChange={typeChange}/><label className="custom-control-label" for="defaultGroupExample2">JWT</label></div> </MDBCol>
    </MDBRow>
    </fieldset>
    
    
   
    <MDBCol> <p className= "h5 text-center mb-4">Choose token format </p></MDBCol> 
    <fieldset id= "format">
    <MDBRow>
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "format" value = "Bare" className= "custom-control-input" id="defaultGroupExample3" onChange={formatChange}/><label className="custom-control-label" for="defaultGroupExample3">Bare</label></div> </MDBCol>	
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "format" value = "Header"  className= "custom-control-input" id="defaultGroupExample4" onChange={formatChange} /><label className="custom-control-label" for="defaultGroupExample4">Header</label></div> </MDBCol>	
    </MDBRow>
    &nbsp;&nbsp;&nbsp;
    <MDBRow>
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "format" value = "JSON"  className= "custom-control-input" id="defaultGroupExample5" onChange={formatChange} /><label className="custom-control-label" for="defaultGroupExample5">JSON</label></div> </MDBCol>	
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "format" value = "JSON_Compact" className= "custom-control-input" id="defaultGroupExample6" onChange={formatChange} /><label className="custom-control-label" for="defaultGroupExample6" >JSON_Compact</label></div> </MDBCol>
    </MDBRow>
    &nbsp;&nbsp;&nbsp;
    <div id="next"></div>
    <MDBCol><div className="custom-control custom-radio"><input type = "radio" name = "format" value = "Pretty" className= "custom-control-input" id="defaultGroupExample7" onChange={formatChange} /><label className="custom-control-label" for="defaultGroupExample7">Pretty</label></div> </MDBCol>
    </fieldset>
    <div className="btn1">
    <MDBBtn outline color="info" type = "submit">Submit</MDBBtn>
    </div>
    </form>
    </MDBContainer>
    
    </div>
    <div style={{float:'right'}} className="next">
    <Button name= "Next"></Button>
    </div>
    </div>

   );

}

export default Credentials;
