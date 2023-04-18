import React, { useState, useEffect } from "react";
import {MyButton} from "./MyButton"

export const App = ()=>{

  const [count, setCount] = useState(0)

  const fnIncrease = ()=>{
    setCount(count + 1)
  }

  const fnDecrease = ()=>{
    setCount(count - 1)
  }

  return (
    <>
      {count}
      <MyButton label="+" handler={fnIncrease} />
      <MyButton label="-" handler={fnDecrease} />
    </>
  );
}
