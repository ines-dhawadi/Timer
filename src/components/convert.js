import React from 'react'
import "../components/style.css"
import {InputGroup,FormControl,Button  } from "react-bootstrap";




class Convert extends React.Component{

    state = {
        numb : 0,
        h:0,
        m:0,
        s:0,


    }
    start = () => {
        this.interval = setInterval(() => {
            let s = this.state.s;
            if (s === 60){
                this.state.m++ 
                this.state.s = 0 
    
            }
            if (this.state.m === 60){
                this.state.h ++
                this.state.m = 0 
            }
    
             this.setState({
                 s : Number(this.state.s)+1,
             })
         },1000);
     }

ehange=(e)=>{
    this.setState({
        numb:(e.target.value )   })

}

conv=()=>{
  let  time=this.state.numb
    this.setState({
        h: Math.floor(time/3600),
        m:Math.floor((time%3600)/60),
        s:time % 60
    })
    console.log(time)
}

Reset=(e)=>{
    
    this.setState({
        h: 0,
        m:0,
        s:0
       
    })
   
}

Stop=()=>{

  clearInterval(this.interval)
  this.setState({
      interval: ' '
  })
}
    render(){ 
        return(
            <div className="globl">
                {/**************************************** */}
                <div className="container col-md-6  col-sm-12">
        
                <h4 className="mb-4">You can convert seconds to (hours, minutes, seconds)</h4>
                
        <InputGroup  className="mb-3 "  onChange={this.ehange}   required>  
        <Button variant="dark" onClick={this.conv} >Convertir</Button>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" ></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
          
                </div>
         {/**************************************** */}
         <div className=" toititl">
             <h6 className="bnttt">hours : {String(this.state.h).padStart(2,'0')}</h6>
             <h6 className="bnttt">minutes :{String(this.state.m).padStart(2,'0')}</h6>
             <h6 className="bnttt">seconds : {String(this.state.s).padStart(2,'0')}</h6>


            
         </div>
<div className="trobnt"> 
         <Button variant="dark" onClick={this.start}>Start</Button>
         <Button variant="dark"  onClick={this.Reset}>Reset</Button>
         <Button variant="dark" onClick={this.Stop}>Stop</Button>
        
         </div>
            </div>
           )
    }
}


export default Convert