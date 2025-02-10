const todoReducer = (state, actions) => {
  switch (actions.type) {
    case "ON_CHANGE":
      return {
        ...state,
        currentInput: actions.payload,
      };
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, state.currentInput],
        currentInput: "", // Clear input after adding
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== actions.payload),
      };
    default:
      return state;
  }
};
export { todoReducer };
