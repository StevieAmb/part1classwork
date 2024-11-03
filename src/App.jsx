
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Makia" age={10 + 26} />
      <Hello name="Sienna" age={ika} />
      <Hello name="Tyler" age={ika} />
      <Hello name="Abem" age={ika} />
      <Hello name="Alia" age={ika}/>
    </div>
  )
}

export default App;
