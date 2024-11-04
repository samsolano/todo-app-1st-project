export function TodoCard(props) {

    const { todo, todoIndex, finishToDo, deleteToDo } = props

    return (
      <div className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-buttons">

            <button disabled={todo.complete} onClick={() => {
                finishToDo(todoIndex)
                
            }}>
                 <h6>Done</h6> </button>
            <button onClick={() => {
                deleteToDo(todoIndex)
            }}> <h6> Delete </h6></button>
        </div>
      </div>
    )
  }
  
  