import TodosDisplay from "./TodosDisplay";

interface PropsTodo {
  name: string,
  lastname: string,
  email: string
}

interface PropsTodos {
  todos: PropsTodo[]
}

const TodosBridge = ({ todos }: PropsTodos) => {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {
        todos.map((todo, index) => (
          <TodosDisplay 
            key={index}
            todo={todo}
          />
        ))
      }
    </div>
  )
};

export default TodosBridge;
