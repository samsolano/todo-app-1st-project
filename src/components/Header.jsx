export function Header(props) {
    const {todos} = props

    const tasksLeft = todos.filter(val => !val.complete).length
    let taskPlural = (tasksLeft === 1) ? 'task' : 'tasks'
    return (
      <>
        <h1 className="text-gradient">You have {tasksLeft} {taskPlural} left</h1>
      </>
    )
  }
  
