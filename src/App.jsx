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

  const increase = () => {
    setCounter(counter + 1)
  }

  const resetToZero = () => {
    setCounter(0)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  return (
    <section>
      <Display counter={counter} />
      <Button 
        text="Plus"
        handleClick={increase}
      />
      <Button 
        text="Zero"
        handleClick={resetToZero}
      />
       <Button
        text='Minus'
        handleClick={decreaseByOne}
      />  
    </section>
  )
}

export default App