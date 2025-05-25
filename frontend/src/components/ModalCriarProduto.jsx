import ProdutoForm from "./ProdutoForm";

export default function ModalCriarProduto({ isOpen, onClose, onCriar }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-white text-indigo-900 rounded-2xl shadow-xl w-full max-w-xl p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6">Criar Novo Produto</h2>
        <ProdutoForm onSubmit={onCriar} onCancel={onClose} />
      </div>
    </div>
  );
}