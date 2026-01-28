import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Throws an error if the fetch Response is not OK.
 * @param res - The fetch Response object.
 * @throws {Error} If the response status is not successful.
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Helper function for making JSON API requests.
 * @param method - The HTTP method (GET, POST, etc.).
 * @param url - The request URL.
 * @param data - The optional request payload (will be JSON stringified).
 * @returns A promise that resolves to the fetch Response.
 * @throws {Error} If the request fails.
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
/**
 * Factory function to create a default query function for React Query.
 * Handles automatic fetching based on query keys and 401 Unauthorized errors.
 * @param options - Configuration for handling 401 errors.
 * @returns A query function compatible with tanstack/react-query.
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
