interface PropsTodo {
  name: string,
  lastname: string,
  email: string
}

interface PropsTodos {
  todo: PropsTodo
}

const TodosDisplay = ({todo} : PropsTodos) => {
  return (
    <>
      <div className="container mx-auto rounded-md p-5 bg-sky-800">
        <div className="flex items-center gap-2">
          <p className="font-bold text-white">Name: </p><span className="text-white font-thin">{todo.name}</span>
        </div>
        <div className="flex gap-2">
          <p className="font-bold text-white">Lastname: </p><span className="text-white font-thin">{todo.lastname}</span>
        </div>
        <div className="flex gap-2">
          <p className="font-bold text-white">Email: </p><span className="text-white font-thin">{todo.email}</span>
        </div>
      </div>
    </>
  )
}

export default TodosDisplay