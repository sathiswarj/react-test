import React, { useContext } from 'react'
import { GlobalContext } from '.'

const Button = () => {
   const {handleChangeTheme} = useContext(GlobalContext)
  return (
    <>
    <button onClick={ handleChangeTheme}>Click</button>
    </>
  )
}

export default Button