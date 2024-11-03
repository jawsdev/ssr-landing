// app/dynamic/page.js
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
    <div>
      <h1>Dynamic Content Example</h1>
      <p>Rendered at: {timestamp}</p>
      <ul>
        {articles.slice(0, 5).map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
