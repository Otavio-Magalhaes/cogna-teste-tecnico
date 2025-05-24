import { useFormProduto } from "../hooks/useForm";

export default function ProdutoForm({ onSubmit, onCancel }) {
  const { formData, handleChange, handleSubmit } = useFormProduto(onSubmit, onCancel);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={formData.nome}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 bg-gray-100 focus:ring-2 focus:ring-violet-600"
        required
      />
      <textarea
        name="descricao"
        placeholder="Descrição"
        value={formData.descricao}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 bg-gray-100 focus:ring-2 focus:ring-violet-600"
        rows="3"
        required
      />
      <input
        type="number"
        step="0.01"
        name="preco"
        placeholder="Preço (R$)"
        value={formData.preco}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 bg-gray-100 focus:ring-2 focus:ring-violet-600"
        required
      />
      <input
        type="url"
        name="imagemUrl"
        placeholder="URL da imagem"
        value={formData.imagemUrl}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 bg-gray-100 focus:ring-2 focus:ring-violet-600"
      />
      <div className="flex gap-4">
        <button
          type="submit"
          className="w-full bg-violet-700 text-white py-3 rounded-lg font-semibold hover:bg-violet-800 transition"
        >
          Criar Produto
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
