import React, { memo } from "react";

const ChildComp = React.memo(({ propsFunction, decrement }) => {
  console.log("Check render: useCallback!");

  return (
    <div>
      <h2>{decrement}</h2>
    </div>
  );
});

export default ChildComp;
