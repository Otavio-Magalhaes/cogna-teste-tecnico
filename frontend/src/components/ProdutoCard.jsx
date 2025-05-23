import { Link } from 'react-router-dom';
import imagenotFound from "../assets/imageNotFound.png"

export default function ProdutoCard({ produto }) {
  return (
   <Link to={`/produtos/${produto.id}`} className="relative rounded-2xl overflow-hidden shadow-lg h-64 flex items-end group">
      <img
        src={produto.imagem || imagenotFound }
        alt={produto.nome}
        className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/90 via-indigo-800/60 to-transparent" />

      <div className="relative z-10 p-6 text-white w-full text-center">
        <p className="text-2xl font-bold">{produto.nome}</p>
        <p className="mt-4 text-lg font-semibold">R$ {produto.preco.toFixed(2)}</p>
      </div>
   </Link>
  );
}
