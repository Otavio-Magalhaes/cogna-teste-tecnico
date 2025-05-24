import { useState } from "react";

export function useFormProduto(onSubmit, onCancel) {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: 0,
    imagemUrl: '',
  });

  const formatedData = {
    ...formData,
    preco: parseFloat(formData.preco)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formatedData);
    setFormData({ nome: '', descricao: '', preco: 0, imagemUrl: '' });
    if (onCancel) onCancel();
  };

  return { formData, handleChange, handleSubmit };
}
