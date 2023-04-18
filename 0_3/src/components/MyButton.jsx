import React from 'react'
import Main from '../modules/app/main'

const m = Main.singleton();

export const Button = ()=>{
  return (
    <button onClick={()=>{alert(m.test()) }}>
      hello
    </button>
  )
} 