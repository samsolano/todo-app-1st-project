import { TodoCard } from "./TodoCard"

export function TodoList(props) {

    const { deleteToDo, selectedTab, finishToDo, todos } = props

    

    const filteredTodos = selectedTab === 'all' ? todos :
    selectedTab === 'open' ? todos.filter(val => !val.complete) :
        todos.filter(val => val.complete)

    return (
      <>
        {filteredTodos.map((todo, todoIndex) => {
            return (
                <TodoCard 
                key={todoIndex}
                todoIndex={todos.findIndex(val => val.input === todo.input)} 
                todo={todo} 
                finishToDo={finishToDo}
                deleteToDo={deleteToDo}
                />
            )
        })}
      </>
    )
  }
  
  