import {memo} from 'react'

const CallbackCount = ({countValue,onClick}) => {
  console.log('Component rendered', countValue)
  return (
    <>
    <p>{countValue}</p>
    <button onClick={onClick}>Click</button>
    </>
  )
}

export default memo(CallbackCount)