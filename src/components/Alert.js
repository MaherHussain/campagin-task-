import React from "react";

export default function Alert({ alertText, okHandler, cancleHandler }) {
  return (
      <div className="alert-container">
    <div className="alert-box">
        <h2 className="alert-title" >
            Alert 
        </h2>
      <p>{alertText}</p>
      <button onClick={okHandler} className="btn btn-danger " >Delete</button>
      <button onClick={cancleHandler} className="btn btn-secondary mx-2">Cancel</button>
    </div>
    </div>
  );
}
