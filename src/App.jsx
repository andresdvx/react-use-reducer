import { useEffect, useReducer } from "react";
import TodoApp from "./components/Todo-App";
import useForm from "../hooks/useForm";
import reducer from "../helpers/reducer";
import {handleDelete, handleDone } from "../helpers/changes";
import "./App.css";
function App() {
  const { todo, handleChange, clearForm } = useForm({
    id: "",
    title: "",
    desc: "",
    done: false,
  });

  const init =
    localStorage.getItem("todos") != null
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

  const [todos, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.desc.trim().length < 1 || todo.title.trim().length < 1) {
      alert("Enter an title and description");
      return;
    }
    const newTodo = todo;
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    clearForm();
  };

  return (
    <>
      <h2>Todo App ( {todos.length} )</h2>
      <TodoApp />
      <hr />
      <main className="main">
        <div>
          <h2>Todos</h2>
          <ul className="ul-list-todo">
            {todos.length < 1 && <p>No todo's yet</p>}
            {todos &&
              todos.map((todo, i) => {
                return (
                  <div key={todo.id}>
                    <li
                      className={`list-todo ${todo.done && "done"}`}
                      onClick={() => {
                        handleDone(todo.id, dispatch);
                      }}
                    >
                      {i + 1} {todo.desc}{" "}
                      <button
                        className="button-delete"
                        onClick={() => {
                          handleDelete(todo.id, dispatch);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                    <hr className="divider" />
                  </div>
                );
              })}
          </ul>
        </div>
        <div className="xd">
          <h2>New Todo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="input-add"
              onChange={handleChange}
              name="title"
              value={todo.title}
            />
            <input
              type="text"
              placeholder="Description"
              className="input-add"
              onChange={handleChange}
              name="desc"
              value={todo.desc}
            />
            <button className="button-add" type="submit">
              Create
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
