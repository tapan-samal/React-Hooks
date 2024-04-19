import React, { useState } from "react";

const StateAsObject = () => {
  const initialObj = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialObj);

  const handleChangeValue = (e) => {
    console.log("Event:" , e.target);
    // setUser({...user, [e.target.name]: e.target.value});

    const {name, value} = e.target;
    setUser((prevUser) => ({...prevUser, [name]: value}));
    //Both are the same but this is the best practice 
  };

  return (
    <>
      <h2>State as Object</h2>
      <form>
        <label>
          Username:{" "}
          <input type="text" name="username" onChange={handleChangeValue} />
        </label>
        <br />
        <br />
        <label>
          Password:{" "}
          <input type="text" name="password" onChange={handleChangeValue} />
        </label>
      </form>
      <h4>
        Username: {user.username} <br />
        Password: {user.password}
      </h4>
      <h4>{JSON.stringify(user)}</h4>
    </>
  );
};

export default StateAsObject;
