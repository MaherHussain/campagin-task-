import React from "react";


export default function Button({ value,onClickHandle }) {
  

  return (
    <div className="button-con">
      <button onClick={onClickHandle}>{value}</button>
      
    </div>
  );
}
