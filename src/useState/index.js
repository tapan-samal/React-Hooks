import React from "react";
import StateAsNumber from "./stateType/StateAsNumber";
import StateAsString from "./stateType/StateAsString";
import StateAsArray from "./stateType/StateAsArray";
import StateAsBoolean from "./stateType/StateAsBoolean";
import StateAsObject from "./stateType/StateAsObject";
import StateAsNull from "./stateType/StateAsNull";

const UseStateHome = () => {
  return (
    <>
      <h1>1. UseState</h1>
      <StateAsNumber />
      <StateAsString />
      <StateAsBoolean />
      <StateAsArray />
      <StateAsObject />
      <StateAsNull />
    </>
  );
};

export default UseStateHome;
