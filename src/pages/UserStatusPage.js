import React from 'react';
import { StyleSheetConsumer } from 'styled-components';
//create state for tokeb
//create state for users

const UserStatusPage = () => {
  return (
    <main>
      <h1>User Status</h1>
      <p>Here coes the user Status.</p>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Please select userName</label>
        <input id="username" type="text"></input>
        <button>Login</button>
      </form>
    </main>
  );
  async function loginUser(event) {
    event.preventDefault();
    const form = event.target;
    const response = await fetch(
      `https://api.spacetraders.io/users/${input.value}/claim`,
      {
        method: 'POST',
      }
    );
    const data = await response.json();
    console.log(data);
    setToken(data.token);
    setUser(data.user);
  }
};

export default UserStatusPage;
