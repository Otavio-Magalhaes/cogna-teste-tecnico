import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRegister() {
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  async function submitRegister(name, email, password) {
    setErro(null);
    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        console.log(data);
        
        throw new Error(data.erro || 'Erro ao cadastrar');
      }

      navigate('/produtos');
    } catch (error) {
      setErro(error.message);
    }
  }

  return { submitRegister, erro };
}
