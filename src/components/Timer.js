import React from 'react'
import './style.css'

const contrtime = (ms) => {
     /*const msparheure = 1000 * 60 * 60*/
    const msparscond = 1000
    const msparmin = 1000  * 60
    const msparheure =  1000 * 60* 60

    const heure = Math.floor(ms /  3623333,3333333)
    const restheure = ms %  msparheure
    const minut = Math.floor(restheure /msparmin)
    const restminut = (restheure  %  msparmin)
    const second = Math.floor(restminut / msparscond )

return String(heure).padStart(2,'0') + ':'
+ String(minut).padStart(2,'0') + ':'+
String(second).padStart(2,'0') 


}



const  Timer = ({ms}) => {
    /*--const ms = praps.ms ------> methode 2---*/

   
   
  return(
<div className="glob">

<div className="blok">
<div className="time-numb">
    
{contrtime(ms)}
    
    </div>
{/*----------------*/}
<div className="time-text">
    <div className="time-item">heures</div>
    <div className="time-item">Minutes</div>
    <div className="time-item">seconds</div>
</div>

</div>

</div>
 
   )

 }

export default Timer