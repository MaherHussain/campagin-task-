import React from "react";


export default function Button({ label,onClickHandle }) {
  

  return (
    <div className="button-con">
      <button onClick={onClickHandle}>{label}</button>
      
    </div>
  );
}
