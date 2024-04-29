import React, { useState } from 'react'
import Button from './Button';

function Products() {
    const[Count,setCount] = useState(0);
    const Handlecount = ()=>{
      setCount(0)
    }
    const pHandlecount = ()=>{
      setCount(Count+1)
    }
    const nHandlecount = ()=>{
      setCount(Count-1)
    }


  return (
    <>
    <div className="bg-black w-full h-screen flex justify-center items-center flex-col gap-2">
      <p className="text-white">{Count}</p>
      <div className="flex gap-4">
      <Button fun={nHandlecount} value="-"/>
      <Button fun={Handlecount} value="Reset"/>
      <Button fun={pHandlecount} value="Plus"/>
      </div>
    </div>
    </>
  )
}

export default Products
