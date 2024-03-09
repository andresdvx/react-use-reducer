import { useState } from "react";
import { v4 } from "uuid";
const useForm = (initialState = {}) => {
  const [todo, setTodo] = useState(initialState);
  const clearForm = () => {
    setTodo(initialState);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      id: v4(),
      [name]: value,
    });
  };
  return { todo, handleChange, clearForm };
};

export default useForm;
