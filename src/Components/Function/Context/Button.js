import React, { useContext } from 'react'
import { GlobalContext } from '.'

const Button = () => {
   const {handleChangeTheme} = useContext(GlobalContext)
  return (
    <>
    <button className="bg-black text-white font-bold" onClick={ handleChangeTheme}>Click</button>
    </>
  )
}

export default Button