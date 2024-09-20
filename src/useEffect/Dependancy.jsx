import React, { useEffect, useState } from "react";

const Dependancy = () => {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        let data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [id]);

  const handleIncrementId = () => {
    if (id < 10) {
      setId(id + 1);
    }
  };
  const handleDecrementId = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  return (
    <>
      <h2>B. Dependancy:</h2>
      {/* {data.map((d) => <div>{d.name}</div>)} */}
      <button onClick={handleDecrementId}>Decrement</button>{" "}
      <button onClick={handleIncrementId}>Increment</button>
      {data && (
        <div>
          <h4>{data.name}</h4>
          <p>{data.email}</p>
        </div>
      )}
    </>
  );
};

export default Dependancy;
