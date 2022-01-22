import React from "react";

export default function Discounts({discounts,setDiscounts,onSelect}) {
 

  return (
    <div className="">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th scope="col" className="table-head">
              {discounts.length > 0 ? (
              <input
                name="selectall"
                type="checkbox"
                checked={!discounts.some((item) => item?.isChecked !== true)}
                onChange={(e) => {
                  onSelect(e);
                }}
              />):("")  }
             
            </th>
            <th scope="col" className="table-head">
              Campaign
            </th>
            <th scope="col" className="table-head">
              Promotion
            </th>
            <th scope="col" className="table-head">
              Details
            </th>
            <th scope="col" className="table-head">
              Discount
            </th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((item) => {
            return (
              <tr key={item.id} >
                <th scope="row">
                  <input
                    onChange={(e) => {
                      onSelect(e);
                    }}
                    name={item.id}
                    type="checkbox"
                    checked={item?.isChecked || false}
                  />
                </th>
                <td >{item.campaign}</td>
                <td>{item.promotion}</td>
                <td>{item.details}</td>
                <td>{item.discount} kr</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
