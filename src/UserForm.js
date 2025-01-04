import React, { useState } from "react";

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // const isVaildEmail = (email) => {
  //   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  // };
  const handleSubmit = () => {
    if (!name || !email) {
      setError("Please Enter you Details");
      return;
      // } else if (!isVaildEmail(email)) {
      //   setError("Enter Valid Email");
    } else {
      setError("");
      addUser({ name: name, email });
      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      Name:{" "}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      Email:{" "}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <button onClick={handleSubmit}>Add</button>
      <br /> <br />
      {/* {!error && (
        <p>
          {name} {email}
        </p>
      )} */}
    </div>
  );
}
