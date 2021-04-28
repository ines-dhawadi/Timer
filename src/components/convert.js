import React from 'react'
import "../components/style.css"
import {InputGroup,FormControl  } from "react-bootstrap";

function Convert() {
  return(
    <div className="globl">
        {/**************************************** */}
        <div className="container col-md-6 ">

        <h4>Vous pouvez convertir les seconds en ( heures, Minutes, seconds)</h4>
<InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl placeholder="Entrez votre valeur"/>
  </InputGroup>
        </div>
 {/**************************************** */}
 <div className=" toititl">
     <h6 className="bnttt">heures :</h6>
     <h6 className="bnttt">Minutes :</h6>
     <h6 className="bnttt">seconds :</h6>
 </div>



    </div>
   )

 }

export default Convert