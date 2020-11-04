import React, { useState, useEffect } from "react";


const textBox = (props) => {
  return (
    
      <div className="input-text">
        <label>{props.Title}</label>
        <input type={props.type} />
      </div>
     
     
    
  );
};

export default textBox;
