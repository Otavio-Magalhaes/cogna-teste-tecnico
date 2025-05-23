import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { submitRegister, erro } = useRegister();

  function handleSubmit(e) {
    e.preventDefault();
    submitRegister(name, email, password);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-900 text-white p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Cadastrar</h2>

        {erro && <p className="mb-4 text-red-400">{erro}</p>}

        <label className="block mb-2 font-semibold text-white">Nome</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white/80 text-black placeholder-gray-500"
          placeholder="Digite seu nome"
        />

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
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded bg-white/80 text-black placeholder-gray-500"
          placeholder="Digite sua senha"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-500 transition font-semibold text-white py-2 rounded-lg cursor-pointer"
        >
          Cadastrar
        </button>

        <p className="mt-4 text-center text-sm text-white">
          Já tem conta?{' '}
          <Link to="/login" className="underline hover:text-indigo-300">
            Faça login
          </Link>
        </p>
      </form>
    </main>
  );
}
