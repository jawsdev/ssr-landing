import React from 'react';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  const timestamp = new Date().toLocaleString(); // Get the current timestamp

  return (
    <div>
      <h1>Welcome to My Landing Page</h1>
      <p>{data.title}</p>
      <p>Rendered at: {timestamp}</p> {/* Display the timestamp */}
    </div>
  );
}
