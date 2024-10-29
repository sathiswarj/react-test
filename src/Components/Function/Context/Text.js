import React, { useContext } from 'react'
import { GlobalContext } from './index'

const Text = () => {
  const { theme } = useContext(GlobalContext)

  return (
    <>
      <h3
        style={{
          fontSize: theme === 'light' ? '25px' : '14px',
          backgroundColor: theme === 'light' ? 'black' : 'white',
          color: theme === 'light' ? 'white' : 'black'
        }}>
        Context Text
      </h3>
    </>
  )
}

export default Text