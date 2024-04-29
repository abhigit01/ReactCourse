import React, { useState } from "react";
import Products from "./Components/Products";
import Cards from "./Components/Cards";
import Learnprops from "./Components/Learnprops";
function App() {
  var [a, b] = useState(69);
  const [count, setCount] = useState(0);
  const HandlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
const resetText = ()=>{
  setCount(0);
}
  return (
    <>
      <p className="text">{count}</p>
      <Learnprops text={"plus"} handler={HandlePlus} />
      <Learnprops text={"minus"} handler={handleMinus}/>
      <Learnprops text={"reset"} handler={resetText} />
    </>
  );
}

export default App;
