import React from 'react'
import Main from '../modules/app/main'

export const Button = ()=>{
  return (
    <button onClick={()=>{alert(new Main().test(8)) }}>
      hello
    </button>
  )
} 