import React, { useState } from "react";

export default function Alert(props) {

  function makeUpperCase(word){
    let finalWord = word.charAt(0).toUpperCase()+word.slice(1);
    console.log(finalWord);
    
    return finalWord;
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert" style={{height: '45px', width: '100%', position: 'absolute'}}>
      <svg
        className="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label={`${props.alert.type}:`}
      >
        <use xlinkHref="#check-circle-fill" />
      </svg>
      <div><strong>{makeUpperCase(props.alert.type)}:</strong> {props.alert.message}</div>
    </div>
  );
}
