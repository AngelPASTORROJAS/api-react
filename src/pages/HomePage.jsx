import React, { useState, useEffect } from "react";
import UserResource from "./../api/ressources/UserRessource";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await UserResource.getUsers();
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <p>users</p>
      {users.map((u) => (
        <p>{"nom : " + u.name + ", prenom : " + u.username}</p>
      ))}
    </>
  );
};

export default HomePage;
