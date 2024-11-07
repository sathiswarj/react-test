import { useCallback, useState } from 'react'
import CallbackCount from './CallbackCount'

const Calback = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const memorizedCountOne = useCallback(() => setCountOne(prevCount => prevCount + 1), []);
  const memorizedCountTwo = useCallback(() => setCountTwo(prevCount => prevCount + 1), []);
  return (
    <>
      <CallbackCount
        countValue={countOne}
        onClick={memorizedCountOne}
      />
      <CallbackCount
        countValue={countTwo}
        onClick={memorizedCountTwo}
      />
    </>
  )
}

export default Calback