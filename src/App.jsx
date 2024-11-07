import { useState } from 'react'

// const Display = ({counter}) => {
//   return (
//     <p>{counter}</p>
//   )
// }

// const Button = ({handleClick, text}) => {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks, 
      left: clicks.left + 1 
    }
    setClicks(newClicks)
  }
  
  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}

export default App