import React, { useState, useEffect } from "react";


const button = (props) => {
  return (
    
      <div className="input-button">
        <input type="button" value={props.value}/>
      </div>
     
     
    
  );
};

export default button;
