const API_BASE = 'https://ivfedotovshopapi.netlify.app/.netlify/functions/app';

export function getAuthToken() {
  return localStorage.getItem('token') || '';
}

export function setAuthToken(token) {
  if (token) localStorage.setItem('token', token);
}

export function clearAuthToken() {
  localStorage.removeItem('token');
}

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getAuthToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || 'Request error';
    throw new Error(message);
  }
  return data;
}

export const api = {
  // auth
  register: (payload) => request('/auth/register', { method: 'POST', body: payload }),
  login: (payload) => request('/auth/login', { method: 'POST', body: payload }),
  me: () => request('/users/me', { auth: true }),
  users: () => request('/users', { auth: true }),
  updateUser: (id, payload) => request(`/users/${id}`, { method: 'PUT', body: payload, auth: true }),
  // products
  products: () => request('/products'),
  product: (id) => request(`/products/${id}`),
  createProduct: (payload) => request('/products', { method: 'POST', body: payload, auth: true }),
  updateProduct: (id, payload) => request(`/products/${id}`, { method: 'PUT', body: payload, auth: true }),
  deleteProduct: (id) => request(`/products/${id}`, { method: 'DELETE', auth: true }),
  // news
  news: () => request('/news'),
};

export default api;


