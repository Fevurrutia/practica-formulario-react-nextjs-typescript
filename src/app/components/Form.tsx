import { useState } from "react";
import { PropsTodo } from "../page";

interface PropsFormTodos {
  id: number
  name: string,
  lastname: string,
  email: string
}

interface addTodoProps {
  addTodo: (todo: PropsTodo) => void;
}

const Form = ({ addTodo }: addTodoProps) => {
  const [form, setForm] = useState<Omit<PropsFormTodos, 'id'>>({name:'', lastname:'', email:''});

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    addTodo({
      id: Date.now(),
      ...form
    })
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto mt-10 max-w-screen-sm rounded-md bg-neutral-300 shadow-md shadow-gray-600"
    >
      <div className="flex flex-col p-10 gap-3 mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Ingrese nombre"
          className="py-1 pl-2 rounded-md outline-none shadow-md shadow-gray-500"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Ingrese apellido"
          className="py-1 pl-2 rounded-md outline-none shadow-md shadow-gray-500"
          value={form.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese email"
          className="py-1 pl-2 rounded-md outline-none shadow-md shadow-gray-500"
          value={form.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-1/6 py-1.5 mt-3 mx-auto text-white font-semibold rounded-md bg-neutral-500 shadow-md shadow-gray-500"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
