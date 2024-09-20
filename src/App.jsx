import React from "react";
import UseState from "./useState";
import UseEffect from "./useEffect";
import UseContext from "./useContext";
import UseMemo from "./useMemo";
import UseCallback from "./useCallback";
import UseRef from "./useRef";
import UseReducer from "./useReducer";

const App = () => {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseContext />
      <UseMemo />
      <UseCallback />
      <UseRef />
      <UseReducer />
    </>
  );
};

export default App;
