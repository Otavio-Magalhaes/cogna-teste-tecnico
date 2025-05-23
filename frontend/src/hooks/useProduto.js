import { useEffect, useState } from 'react';
import { buscarProdutoPorId } from '../services/buscarProdutoPorId';

export function useProduto(id, token) {
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    async function carregarProduto() {
      try {
        const dados = await buscarProdutoPorId(id, token);
        setProduto(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    if (id && token) carregarProduto();
  }, [id, token]);

  return { produto, carregando, erro };
}