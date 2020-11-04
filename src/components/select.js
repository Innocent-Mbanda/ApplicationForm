import React from 'react'
import {district} from '../constants/districts'


const select =(props)=>{
return(
    <div>
    <div>
    <label ><b>{props.optionTitle}</b></label>
    </div>
    <select name="District">
    {props.options.map(item=>{
      return(
        <option value={item}>{item}</option>
      )
    })}
    </select>
    </div>
)
}

export default select;