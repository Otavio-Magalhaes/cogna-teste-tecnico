import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { LoginDTO } from '../dtos/LoginDTO';

export function useLogin() {
  const navigate = useNavigate();
  const [erro, setErro] = useState(null);

  async function submitLogin(email, senha) {
    setErro(null);
    const dto = new LoginDTO(email, senha);

    try {
      await loginUser(dto);
      navigate('/produtos');
    } catch (err) {
      setErro(err.message);
    }
  }
  
  return { submitLogin, erro };
}
