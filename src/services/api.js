const API_BASE_URL = "/api";

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getOrders() {
  const response = await fetch(`${API_BASE_URL}/orders`);

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return response.json();
}

export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      username,
      password
    })
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}
