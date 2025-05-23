import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProduto } from '../hooks/useProduto';
import { ProdutoDetalheView } from '../components/ProdutoDetalheView';
import { useToken } from '../hooks/useToken';
import { useEffect } from 'react';
import imageNotFound from "../assets/imageNotFound.png"

export default function ProdutoDetalhe() {

  const { id } = useParams();
  const token = useToken();
  const navigate = useNavigate();


  useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);


  const { produto, carregando, erro } = useProduto(id, token);

  if (carregando) return <p className="p-8 text-center">Carregando produto...</p>;
  if (erro) return <p className="p-8 text-center text-red-600">{erro}</p>;
  if (!produto) return null;

  return (
   <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 px-6 sm:px-12 text-indigo-900">
  <div className="max-w-5xl mx-auto">
    <Link
      to="/produtos"
      className="inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-500 transition-colors font-medium mb-8"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Voltar aos produtos
    </Link>

    <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden hover:shadow-purple-500/40 transition-shadow duration-300">
   
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img
          src={produto.imagem || imageNotFound}
          alt={produto.nome}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6 text-indigo-900">
        <h2 className="text-3xl font-bold">{produto.nome}</h2>
        <p className="text-lg leading-relaxed">{produto.descricao}</p>
        <p className="text-2xl font-semibold text-indigo-700">R$ {produto.preco.toFixed(2)}</p>
       
      </div>
    </div>
  </div>
</main>


  );
}