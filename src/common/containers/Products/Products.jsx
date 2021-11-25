import { useState, useEffect } from 'react';

// services
import { api } from '../../../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data.products);
    }

    loadProducts();
  }, []);

  return (
    <>
      {products.map(product => (
        <p key={product.id}>
          {product.name} - {product.price}
        </p>
      ))}
    </>
  );
}

export { Products };
