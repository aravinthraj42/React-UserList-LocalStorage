import "./styles.css";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

export default function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users")) || [];
    setUser(storedUser);
  }, []);
  const addUser = (user) => {
    const updatedValues = [...users, user];
    setUser(updatedValues);
    localStorage.setItem("users", JSON.stringify(updatedValues));
  };
  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
}
