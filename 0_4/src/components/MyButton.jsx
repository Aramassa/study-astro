import React, {useState} from 'react'
import Main from '../modules/app/main'

const m = Main.singleton();

export const Button = ()=>{

  const [count, setCount] = useState(null);
  m.subscribeUpdate({
    next: (e)=> setCount(e)
  })

  return (
    <button onClick={()=>{m.test()}}>
      hello {count}
    </button>
  )
} 