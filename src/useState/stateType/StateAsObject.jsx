import React, { useState } from "react";

const StateAsObject = () => {
  const initialObj = { username: "", password: "" };

  const [user, setUser] = useState(initialObj);
  const [isSubmitted, setSubmitted] = useState(false);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(user);
  }

  return (
    <>
      <h2>E. State as Object</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input type="text" name="username" onChange={handleInputData} />
        </label>
        <br />
        <br />
        <label>
          Password:{" "}
          <input type="password" name="password" onChange={handleInputData} />
        </label> <br /><br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p>
          Username: {user.username} <br />
          Password: {user.password}
        </p>
      )}
    </>
  );
};

export default StateAsObject;
