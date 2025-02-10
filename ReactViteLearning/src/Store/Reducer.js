const todoReducer = (state, actions) => {
  switch (actions.type) {
    case "ON_CHANGE":
      return {
        ...state,
        todoInput: actions.payload,
      };
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
  }
};
export { todoReducer };
