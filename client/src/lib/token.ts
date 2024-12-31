// Key for storing the token in localStorage
const TOKEN_KEY = "authToken";

// Save the token to localStorage
export const setToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

// Get the token from localStorage
export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

// Remove the token from localStorage
export const removeToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};

// Check if a token exists
export const hasToken = (): boolean => {
  if (typeof window !== "undefined") {
    return !!localStorage.getItem(TOKEN_KEY);
  }
  return false;
};
