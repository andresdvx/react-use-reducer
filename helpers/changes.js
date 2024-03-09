export const handleDone = (id, dispatch) => {
  const action = {
    type: "done",
    id,
  };
  dispatch(action);
};

export const handleDelete = (id, dispatch) => {
  const action = {
    type: "delete",
    id,
  };
  dispatch(action);
};
