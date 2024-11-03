import React from 'react';

async function fetchLatestArticles() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export default async function Page() {
  const articles = await fetchLatestArticles();
  const timestamp = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dynamic Content Example</h1>
      <p className="text-gray-600 mb-8">Rendered at: {timestamp}</p>
      <ul className="space-y-4">
        {articles.slice(0, 5).map((article) => (
          <li key={article.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">{article.title}</h2>
            <p className="text-gray-600 mt-2">{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
