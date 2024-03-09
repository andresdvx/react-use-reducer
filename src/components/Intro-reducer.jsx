const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

const todoReducer = (value = initialState, action) => {
  if (action?.type === "agregar") {
    return [...value, action.payload];
  }
  return value;
};

const action = {
  type: "agregar",
  payload: {
    id: 2,
    todo: "Comprar huevos",
    done: false,
  },
};

let todos = todoReducer(initialState, action);

console.log(todos);
