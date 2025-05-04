import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Responsive Product Listing Page" />
      </Head>

      <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Store</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-blue-600">Login</Link>
          <Link href="/signup" className="text-blue-600">Sign Up</Link>
        </div>
      </header>

      <main className="min-h-screen p-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Product Listing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-sm text-gray-600 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
