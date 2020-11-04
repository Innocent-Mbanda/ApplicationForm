import React from 'react'


const radioBox=(props)=>{
return(
    <div className="radios-inputs">
    <input name={props.name} type="radio"/>
    <label>{props.radioname} </label>
   </div>

)

}

export default radioBox;
    



