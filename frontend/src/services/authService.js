import { LoginDTO } from '../dtos/LoginDTO';

export async function loginUser(loginDTO) {
  const res = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: loginDTO.toJson(),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Erro no login');
  }

  return response;
}
