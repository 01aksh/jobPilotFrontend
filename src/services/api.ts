import { ApiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

/**
 * Generic fetch helper with automatic JSON parsing, error handling, etc.
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return {
      data,
      status: response.status,
      message: 'Success',
      success: true,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      data: {} as T,
      status: 500,
      message: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    };
  }
}

/**
 * HTTP GET request
 */
export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  return fetchApi<T>(endpoint);
};

/**
 * HTTP POST request
 */
export const post = async <T>(endpoint: string, data: any): Promise<ApiResponse<T>> => {
  return fetchApi<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * HTTP PUT request
 */
export const put = async <T>(endpoint: string, data: any): Promise<ApiResponse<T>> => {
  return fetchApi<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * HTTP DELETE request
 */
export const remove = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  return fetchApi<T>(endpoint, {
    method: 'DELETE',
  });
};