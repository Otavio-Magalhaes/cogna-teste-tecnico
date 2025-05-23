export function useToken() {
  return localStorage.getItem('accessToken');
}