import { useProdutos } from '../hooks/useProducts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import ProdutoCard from '../components/ProdutoCard';

export default function Produtos() {
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log(token)
      navigate('/login');
    }
  }, [token, navigate]);

  const { produtos, carregando, erro } = useProdutos(token);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 text-center mb-12 tracking-tight drop-shadow-md">
          Produtos
        </h1>

        {carregando && (
          <p className="text-center text-gray-500 text-lg animate-pulse">
            Carregando produtos...
          </p>
        )}

        {erro && (
          <p className="text-center text-red-500 text-lg font-semibold">
            {erro}
          </p>
        )}

        {!carregando && !erro && (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {produtos.map(produto => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
