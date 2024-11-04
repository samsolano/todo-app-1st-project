import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState, useEffect } from 'react'
function App() {

  const [todos, setTodos] = useState([{input: "Make your first Todo!", complete: false}])
  const [selectedTab, setSelectedTab] = useState('all')

  function addToDo(newTodoInput) {
    const newTodos = [...todos, {input: newTodoInput, complete: false}]
    setTodos(newTodos)
    saveData(newTodos)
  }

  function finishToDo(index) {
    const completedToDo = {input: todos[index].input, complete: true}
    let newTodos = [...todos]
    newTodos[index] = completedToDo
    setTodos(newTodos)
    saveData(newTodos)
  }

  function deleteToDo(index) {
    const newTodos = todos.filter((object, objectIndex) => {
      return objectIndex !== index
    })
    setTodos(newTodos)
    saveData(newTodos)
  }

  function saveData(currentTodos)
  {
    localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}))
  }

  useEffect(() => 
  {
    if(!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])


  return (
    <>
    <Header todos={todos}/>
    <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
    <TodoList deleteToDo={deleteToDo} finishToDo={finishToDo} selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
    <TodoInput todos={todos} addToDo={addToDo}/>
    </>
  )
}

export default App

//Done:
  //change list based on tab
  //add
  //delete
  //local storage


//Todo:
  // future work add edit button