export async function loginUser(loginDTO) {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: loginDTO.toJson(),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || 'Erro no login');
  }

  const data = await response.json();
  localStorage.setItem('accessToken', data.accessToken);

  return data;
}
