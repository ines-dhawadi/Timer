import React from 'react'
import  Timer from "../components/Timer";


class Dynmc extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dymctime :'0'
        }
        setInterval(() => {
            this.setState({
                dymctime:this.state.dymctime + 1000 
            })
            
        },1000);




    }

    render(){
        return(<Timer  ms={this.state.dymctime}/>)
        
         }
    }
  

export default Dynmc