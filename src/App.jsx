import { useState } from 'react'

const Display = (props) => {
  return (
    <p>{props.counter}</p>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const resetToZero = () => {
    setCounter(0)
  }

  return (
    <section>
      <p>{counter}</p>
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={resetToZero}> 
        zero
      </button>
    </section>
  )
}

export default App