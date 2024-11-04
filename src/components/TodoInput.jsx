import { useState } from 'react'

export function TodoInput(props) {

  const {todos, addToDo} = props
  const [inputValue, setInputValue] = useState('')

    return (
      <div className="input-container">
        <input onChange={(e) => {
          setInputValue(e.target.value)
        }}value={inputValue} className="input" placeholder="Add Task"/>

        <button onClick={() => {
            addToDo(inputValue)
            setInputValue('')
        }}> <i className="fa-solid fa-plus"></i> </button>
      </div>
    )
  }
  
  