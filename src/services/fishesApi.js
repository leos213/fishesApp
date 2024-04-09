const API_URL = "http://localhost:9000";

export const getFishs = async () => {
  const response = await fetch(`${API_URL}/fishes`);

  if (!response.ok) {
    throw new Error("Failed to fetch fishes");
  }
  const data = await response.json();
  return data;
};
