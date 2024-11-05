import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  // console.log('rendering...', counter)


  return (
    <section>
      <p>{counter}</p>
      <button onClick={handleClick}>
        plus
      </button>
    </section>
  )
}

export default App