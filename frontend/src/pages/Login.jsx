import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin'


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { submitLogin, erro } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    submitLogin(email, senha);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-900 text-white p-8">
      <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>

        {erro && <p className="mb-4 text-red-400">{erro}</p>}

        <label className="block mb-2 font-semibold text-white">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white/80 text-black placeholder-gray-500"
          placeholder="Digite seu email"
        />

        <label className="block mb-2 font-semibold text-white">Senha</label>
        <input
          type="password"
          required
          value={senha}
          onChange={e => setSenha(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-white/80 text-black placeholder-gray-500"
          placeholder="Digite sua senha"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-white py-2 rounded-lg cursor-pointer"
        >
          Entrar
        </button>

        <p className="mt-4 text-center text-sm text-white">
          Não tem conta?{' '}
          <Link to="/register" className="underline hover:text-indigo-300">
            Cadastre-se
          </Link>
        </p>
      </form>
    </main>


  );
}
