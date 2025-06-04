const BASE_URL = process.env.REACT_APP_BASE_API_URL || "https://sky-fall-dev.vercel.app/";
const API_BASE = `${BASE_URL}/api`;

export const API_URL = {
  GET_ALL_BLOGS: `${API_BASE}/blogs`,
  GET_BLOGS_SETTINGS: `${API_BASE}/globals/blog-settings`,
};
