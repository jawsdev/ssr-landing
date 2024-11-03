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
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Personalized Content Example</h1>
      <p className="text-gray-600 mb-8">Rendered at: {timestamp}</p>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Welcome, {user.name}!</h2>
        <p className="text-gray-600 mt-2">Email: {user.email}</p>
        <p className="text-gray-600 mt-2">Company: {user.company.name}</p>
      </div>
    </div>
  );
}
