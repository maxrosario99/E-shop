import React, { useEffect, useState } from "react";
import { deleteUser, displayUser } from "./api/user";

export interface User {
  name: string;
  password: string;
  _id: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleDeleteUsers = async (user: User) => {
    const response = await deleteUser(user);
    const nextresponse = await displayUser();

    console.log(nextresponse.data);
    setUsers(nextresponse.data);
  };

  // const response = await LoginUser({ username: usernameInput, password });
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await displayUser();

        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name}
          <button onClick={() => handleDeleteUsers(user)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Users;
