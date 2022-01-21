import './App.css';
import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import Discounts from './components/Discounts'
import Button from './components/Button'


const data = [
  {
    id: 1,
    campaign: "Summer Sale ",
    promotion: "10 % of product",
    details: "10-off",
    discount: 118,
  },
  {
    id: 2,
    campaign: "Summer Sale ",
    promotion: "5 % of product",
    details: "5-off",
    discount: 118,
  },
  {
    id: 3,
    campaign: "Summer Sale ",
    promotion: "3 % of product",
    details: "3-off",
    discount: 118,
  },
];
function App() {
  const [discounts, setDiscounts] = useState(data);
// select items func
  const onSelect = (e) => {
    const { name, checked } = e.target;
    if (name === "selectall") {
      let tempItems = discounts.map((item) => {
        return { ...item, isChecked: checked };
      });
      setDiscounts(tempItems);
    } else {
      let tempItems = discounts.map((item) =>
        item.id.toString() === name ? { ...item, isChecked: checked } : item
      );
      
      setDiscounts(tempItems);
    }
  };
  // delete items func
const deleteItems = (e) => {
  e.preventDefault();
  const unCheckedItems = discounts.filter((item) => { return !item.isChecked}  )
  console.log(unCheckedItems);
  setDiscounts(unCheckedItems)

}
  return (
    <div className="App">
      <div className="container-fluid pt-5">
      <Header title="Discounts"/>
      <Discounts discounts={discounts} onSelect={onSelect} setDiscounts={setDiscounts}/>
      {discounts.find(item => item.isChecked  ) ? (<Button value="Remove" onClickHandle={deleteItems}/>):("")}
      </div>

    </div>
  );
}

export default App;
