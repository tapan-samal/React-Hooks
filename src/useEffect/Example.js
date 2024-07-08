import React, { useEffect, useState } from "react";

const Example = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        let data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <h2>UseEffect</h2>
      {/* {data.map((d) => <div>{d.name}</div>)} */}
      <button onClick={() => setId(id + 1)}>Increment</button>
      <button onClick={() => setId(id - 1)}>Decrement</button>
      {data && (
        <div>
          <h4>{data.name}</h4>
          <div>{data.email}</div>
        </div>
      )}
    </>
  );
};

export default Example;
