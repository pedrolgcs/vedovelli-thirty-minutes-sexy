import { useQuery } from 'react-query';

// services
import { api } from '../services/api';

async function getProducts() {
  const { data } = await api.get('/products');

  return data.products;
}

async function getProduct(id) {
  const { data } = await api.get(`/products/${id}`);

  return data.product;
}

function useProducts() {
  return useQuery('products', () => getProducts(), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

export { useProducts, getProduct, getProducts };
