import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import UserList from './components/UserList'
import { users } from './User[]'

function App() {

  const [click,setClick] = useState(false)
 
  const HandleClick = () =>{
    return setClick(prev=>!prev)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Card width={800} height={200} backgroundColor='green'>
        <button onClick={HandleClick}>Click</button>
      </Card>
      {click && <UserList users={users} />}
    </>
  )
}

export default App
