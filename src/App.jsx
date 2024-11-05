import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }
  // console.log('rendering...', counter)


  return (
    <section>
      <p>{counter}</p>
      <button onClick={() => handleClick()}>
        plus
      </button>
    </section>
  )
}

export default App