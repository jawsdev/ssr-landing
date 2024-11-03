// app/seo-friendly/page.js
import React from 'react';

async function getProductData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }
  return response.json();
}

export default async function Page() {
  const products = await getProductData();
  const timestamp = new Date().toLocaleString();

  return (
    <div>
      <h1>SEO-Friendly Content Example</h1>
      <p>Rendered at: {timestamp}</p>
      <div className="products-grid">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
