export function ProdutoDetalheView({ produto }) {
  return (
    <article className="bg-white rounded p-6 shadow max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{produto.nome}</h1>
      <p className="mb-4 text-lg">{produto.descricao}</p>
      <p className="text-xl font-semibold mb-2">Preço: R$ {produto.preco.toFixed(2)}</p>
      <p className="mb-1">
        <strong>Categoria:</strong> {produto.categoria}
      </p>
      <p>
        <strong>ID da categoria:</strong> {produto.categoriaId}
      </p>
    </article>
  );
}
