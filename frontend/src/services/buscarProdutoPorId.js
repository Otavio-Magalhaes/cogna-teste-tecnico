export async function buscarProdutoPorId(id, token) {
  const resposta = await fetch(`http://localhost:3000/api/produtos/${id}`, {
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  if (!resposta.ok) {
    throw new Error('Produto não encontrado');
  }

  return await resposta.json();
}