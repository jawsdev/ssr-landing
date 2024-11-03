// app/personalized/page.js
import React from 'react';

async function getUserData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }
  return response.json();
}

export default async function Page() {
  const user = await getUserData();
  const timestamp = new Date().toLocaleString();

  return (
    <div>
      <h1>Personalized Content Example</h1>
      <p>Rendered at: {timestamp}</p>
      <h2>Welcome, {user.name}!</h2>
      <h3>Your Email: {user.email}</h3>
      <h4>Company: {user.company.name}</h4>
    </div>
  );
}
