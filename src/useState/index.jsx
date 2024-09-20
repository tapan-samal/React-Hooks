import React from "react";
import StateAsArray from "./stateType/StateAsArray";
import StateAsBoolean from "./stateType/StateAsBoolean";
import StateAsNumber from "./stateType/StateAsNumber";
import StateAsObject from "./stateType/StateAsObject";
import StateAsString from "./stateType/StateAsString";

const UseState = () => {
  return (
    <>
      <h1>1. UseState</h1>
      <StateAsNumber />
      <StateAsString />
      <StateAsBoolean />
      <StateAsArray />
      <StateAsObject />
    </>
  );
};

export default UseState;
