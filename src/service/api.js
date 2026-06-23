const API_URL = "http://localhost:5000";

export const testConnection = async () => {
  const response = await fetch(`${API_URL}/api/test`);
  return response.json();
};