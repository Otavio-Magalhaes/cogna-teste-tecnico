import { useProdutos } from '../hooks/useProducts';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import ProdutoCard from '../components/ProdutoCard';
import ModalCriarProduto from '../components/ModalCriarProduto';
import { criarProduto } from '../services/produtoService';
import imageNotFound from "../assets/imageNotFound.png"
import { Helmet } from "react-helmet"

export default function Produtos() {
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log(token)
      navigate('/login');
    }
  }, [token, navigate]);

  const handleCriarProduto = async (produto) => {
    try {
      await criarProduto(produto, token);
      console.log("handleCriarProduto" + produto)
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Erro ao criar produto');
    }
  };

  const { produtos, carregando, erro } = useProdutos(token);
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <>
      <Helmet>
        <title>Produtos | Store Fictícia </title>
        <meta name="description" content="Veja a lista de produtos disponíveis na plataforma." />
        <meta name="keywords" content="produtos, loja online, compra, ecommerce, ofertas" />
        <meta name="author" content="COGNA" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <main className="min-h-screen bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-900 py-12 px-6 sm:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Produtos
            </h1>
            <button
              onClick={() => setModalAberto(true)}
              className="bg-white text-violet-800 font-semibold px-5 py-3 rounded-xl shadow hover:bg-violet-100 transition"
            >
              + Criar Produto
            </button>
          </div>

          {carregando && (
            <p className="text-center text-violet-200 text-lg animate-pulse">
              Carregando produtos...
            </p>
          )}

          {erro && (
            <p className="text-center text-red-300 text-lg font-semibold">
              {erro}
            </p>
          )}

          {!carregando && !erro && (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {produtos.map(produto => (
                <Link key={produto.id} to={`/produtos/${produto.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300 flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={produto.imagemUrl || imageNotFound}
                        alt={produto.nome}
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-indigo-900 space-y-2">
                      <h2 className="text-xl font-bold truncate">{produto.nome}</h2>
                      <p className="text-sm line-clamp-2">{produto.descricao}</p>
                      <p className="text-lg font-semibold text-indigo-700">R$ {produto.preco.toFixed(2)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <ModalCriarProduto
          isOpen={modalAberto}
          onClose={() => setModalAberto(false)}
          onCriar={handleCriarProduto}
        />
      </main>
    </>
  );
}
