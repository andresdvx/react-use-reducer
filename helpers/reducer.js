const reducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      const stateDeleted = state.filter((e) => {
        return e.id != action.id;
      });
      return stateDeleted;
    case "done":
      const stateDone = state.map((todo) => {
        return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
      });
      return stateDone;
    default:
      return [localStorage.getItem("todos")];
  }
};

export default reducer;
