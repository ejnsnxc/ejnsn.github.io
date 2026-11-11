'use client';

import { useState, useEffect } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed: ' + res.status);
        return res.json();
      })
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search products by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search products by title"
      />

      {error && <p className="error">Could not load products: {error}</p>}

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td><img src={p.image} alt={p.title} height="80" /></td>
              <td>${p.price.toFixed(2)}</td>
            </tr>
          ))}
          {!error && filtered.length === 0 && (
            <tr><td colSpan="3">No products match “{search}”.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
