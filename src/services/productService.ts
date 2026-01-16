import { Product } from '../components/ProductCard';
import productsData from '../data/products.json';

const products: Product[] = productsData;

export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve(products);
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  return Promise.resolve(products.find(p => p.id === id));
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  return Promise.resolve(products.filter(p => p.category === category));
};
