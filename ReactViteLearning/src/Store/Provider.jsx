import { useReducer } from "react";
import { TodoContext } from "./Context";
import { todoReducer } from "./Reducer";
import { intitialState } from "./Constants";

// eslint-disable-next-line react/prop-types
const TodoProvider = ({ children }) => {
  const [state, dispath] = useReducer(todoReducer, intitialState);
  return (
    <TodoContext.Provider
      value={{
        state,
        dispath,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export { TodoProvider };
