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
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">SEO-Friendly Content Example</h1>
      <p className="text-gray-600 mb-8">Rendered at: {timestamp}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
