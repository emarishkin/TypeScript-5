import './App.css'
import Card from './components/Card'

function App() {
 
  const HandleClick = () =>{
    return console.log(111)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Card width={500} height={200} backgroundColor='green'>
        <button onClick={HandleClick}>Click</button>
      </Card>
    </>
  )
}

export default App
