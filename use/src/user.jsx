import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './userList';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (

    <div className="container mt-4">
        <h1>Users List</h1>
      <div className="row">
        {users.map((user) => (
          <UserList
            key={user._id}
            fname={user.firstName}
            lname={user.lastName}
            email={user.email}
            gender={user.gender}
          />
        ))}
      </div>
    </div>
  );
}

export default User;
