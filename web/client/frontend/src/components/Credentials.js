import React,{useState} from 'react';
import Button from './Button';
import { MDBContainer, MDBRow,MDBCol,MDBBtn,MDBNav } from 'mdbreact';


function Credentials(){
   const [type,setType] = useState("OAuth");
   const [format, setFormat] = useState("Bare");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.format.value === "Header" && e.target.type.value === "JWT"){
         alert('CANNOT DO THIS');//reset format and header if so
      }
      console.log(e.target.type.value);
      console.log(e.target.format.value);
   }

   return (
   <div className = "top">
    <div className= "shadow-box-example z-depth-2">
    <MDBContainer>
    <form onSubmit={handleSubmit}> 
    <MDBRow> 
    <MDBCol size="9"> <p className= "h5 text-center mb-4">Choose token type </p>
    </MDBCol></MDBRow> 
    <MDBRow><fieldset id='type'>
    <MDBCol><input type = "radio" name = "type" value = "OAuth"onChange={e => setType(e.target.value)}/><label>OAuth</label> </MDBCol>	
    <MDBCol><input type = "radio" name = "type" value = "JWT" onChange={e => setType(e.target.value)}/><label>JWT</label></MDBCol></fieldset></MDBRow>
    
   
    <MDBCol size="9"> <p className= "h5 text-center mb-4">Choose token format </p></MDBCol> 
    <fieldset id= "format">
    <MDBCol><input type = "radio" name = "format" value = "Bare" onChange={e => setFormat(e.target.value)}/><label>Bare</label> </MDBCol>	
    <MDBCol><input type = "radio" name = "format" value = "Header"  onChange={e => setFormat(e.target.value)} /><label>Header</label> </MDBCol>	
    <MDBCol><input type = "radio" name = "format" value = "JSON"  onChange={e => setFormat(e.target.value)} /><label>JSON</label> </MDBCol>	
    <MDBCol><input type = "radio" name = "format" value = "JSON_Compact" onChange={e => setFormat(e.target.value)} /><label>JSON_Compact</label> </MDBCol>
    <MDBCol><input type = "radio" name = "format" value = "Pretty" onChange={e => setFormat(e.target.value)} /><label>Pretty</label> </MDBCol>
    </fieldset>
    <MDBBtn outline color="info" type = "submit">Submit</MDBBtn>
    </form>
    </MDBContainer>
    
    </div>
    <Button name= "Next"></Button>
    </div>

   );

}

export default Credentials;
