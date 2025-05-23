export async function getProdutos(token) {
  const res = await fetch('http://localhost:3000/api/produtos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return res.json();
}