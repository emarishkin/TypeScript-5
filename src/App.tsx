import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import UserList from './components/UserList'
import { users } from './User[]'
import TodoList from './components/TodoList'
import { todos } from './Todo[]'


function App() {

  const [click,setClick] = useState(false)
  const [clickzad,setClickzad] = useState(false)
 
  const HandleClick = () =>{
    return setClick(prev=>!prev)
  }

  const HandleTodos = () =>{
    return setClickzad(prev=>!prev)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Card width={800} height={200} backgroundColor='green'>
        <button onClick={HandleClick}>Посмотреть пользователей</button>
        <button onClick={HandleTodos}>Посмотреть выполненые задачи</button>
      </Card>
      {click && <UserList users={users} />}
      {clickzad && <TodoList todos={todos} />}
    </>
  )
}

export default App
