import { api } from "./axios";

let onLogout: (() => void) | null = null;

export function setupInterceptors(logoutCallback?: () => void) {
  onLogout = logoutCallback ?? null;

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    // Identifica se a rota é pública
    const isPublic = config.url?.startsWith("/bedrooms");

    if (token && !isPublic) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;
      const url = error.config?.url;

      const isPublic = url?.startsWith("/bedrooms");

      if (status === 401 && !isPublic) {
        localStorage.clear();
        if (onLogout) onLogout();
      }

      return Promise.reject(error);
    }
  );
}
