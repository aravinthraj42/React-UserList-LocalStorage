import React from "react";
export default function UserList({ users }) {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map((user, id) => (
            <li key={id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Users Added</p>
      )}
    </div>
  );
}
