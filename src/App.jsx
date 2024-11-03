
const Hello = (props) => {

  const { name, age } = props
  
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const friends = [ 'Leevi', 'Venla']

  return (
    <div>
      <Hello name="Sarah" age="33" />
      <p>{friends}</p>
    </div>
  )
}

export default App
