import React, { useEffect, useRef } from 'react'

const HookIndex = () => {
    const countValue = useRef(0)
    const inputElementRef = useRef()
  
    const handleClick = () =>{
        countValue.current++
        console.log(countValue.current)
    }

    useEffect(() =>{
     inputElementRef.current.focus() 
    },[])
  return (
    <>
    <h2>Use Ref</h2>
    {/* useRef is a hook that allows you to create a reference to a DOM element or a value that persists across renders but does not trigger re-renders when it changes. */}
    <h2>{countValue.current}</h2>
     <button onClick={handleClick}>Click</button>
     <input name='name' placeholder='Enter the name' ref={inputElementRef} />
    </>
  )
}

export default HookIndex