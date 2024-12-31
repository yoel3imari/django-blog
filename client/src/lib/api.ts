import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { getToken } from './token';

// Define the base URL for the API
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api/";

// Create an Axios instance with default configuration
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token from localStorage
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response; // Return only the data part of the response
  },
  (error: AxiosError) => {
    if (error.response) {
      // Handle HTTP errors (e.g., 4xx, 5xx)
      const errorMessage =
        error.response.data?.message || "Something went wrong";
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      // Handle network errors (e.g., no response from server)
      return Promise.reject(
        new Error("Network error. Please check your connection.")
      );
    } else {
      // Handle other errors
      return Promise.reject(error);
    }
  }
);

// Utility functions for GET, POST, PUT, DELETE
export const get = async <T>(
  endpoint: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await api.get<T>(endpoint, config);
  return response.data; // Return only the data part of the response
};

export const post = async <T>(
  endpoint: string,
  data?: any,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await api.post<T>(endpoint, data, config);
  return response.data; // Return only the data part of the response
};

export const put = async <T>(
  endpoint: string,
  data?: any,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await api.put<T>(endpoint, data, config);
  return response.data; // Return only the data part of the response
};

export const del = async <T>(
  endpoint: string,
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  const response = await api.delete<T>(endpoint, config);
  return response.data; // Return only the data part of the response
};
