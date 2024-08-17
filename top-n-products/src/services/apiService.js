import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies';
const AUTH_TOKEN = 'your_authorization_token_here';  // Replace this with your actual token

export const getProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${company}/categories/${category}/products`,
      {
        params: {
          top: top,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,  // Include the token in the Authorization header
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
