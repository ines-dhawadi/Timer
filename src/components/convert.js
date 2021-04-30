import React from 'react'
import "../components/style.css"
import {InputGroup,FormControl,Button  } from "react-bootstrap";




class Convert extends React.Component{

    constructor(){
        super()
   
    this.state = {
        numb : '',
       

    }

    /***************************** 
setInterval(
    () =>{
        this.setState({
            Convert: this.state.numb +1
        })
    },
    1000
)----------*/
    
}

handlechange(event){
    let val = event.target.value
    console.log(val)
    this.setState({numb:val})

}

    render(){ 
        return(
            <div className="globl">
                {/**************************************** */}
                <div className="container col-md-6  col-sm-12">
        
                <h4>Vous pouvez convertir les seconds en ( heures, Minutes, seconds)</h4>
                
        <InputGroup  className="mb-3 "  onChange={this.handlechange.bind(this)} value={this.state.numb}   required>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" ></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
          
                </div>
         {/**************************************** */}
         <div className=" toititl">
             <h6 className="bnttt">heures : {Math.floor (this.state.numb/3600)} </h6>
             <h6 className="bnttt">Minutes :{Math.floor (this.state.numb/60)} </h6>
             <h6 className="bnttt">seconds : {this.state.numb}</h6>


            
         </div>
         <Button variant="dark">Supprimer</Button>
        
        
            </div>
           )
    }
}


export default Convert