import { useEffect, useState } from 'react';
import { getProdutos } from '../services/produtoService';

export function useProdutos(token) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!token) return;

    async function carregar() {
      try {
        const data = await getProdutos(token);
        setProdutos(data);
      } catch (err) {
        console.log(err)
        setErro(err.message);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, [token]);

  return { produtos, carregando, erro };
}
