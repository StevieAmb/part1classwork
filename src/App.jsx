import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <p>{counter}</p>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
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
      <Display counter={counter} />
      <Button 
        text="Plus"
        handleClick={handleClick}
      />
      <Button 
        text="Zero"
        handleClick={resetToZero}
      />
    </section>
  )
}

export default App