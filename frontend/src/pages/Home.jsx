import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-purple-800 via-violet-700 to-indigo-900 text-white px-8 py-12 font-[poppins]">

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-center">
          Projeto Cogna - Teste Técnico
        </h1>

        <div className="flex gap-6">
          <Link
            to="/login"
            className="px-8 py-3 bg-violet-600 rounded-lg shadow-md hover:bg-violet-500 transition-colors font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 transition-colors font-semibold"
          >
            Cadastro
          </Link>
        </div>
      </div>

      <footer className="text-sm text-center text-violet-300 mt-12">
        Feito por <span className="font-semibold text-white"> <a href='https://www.linkedin.com/in/otaviofmagalhaes/' target='_blank'>Otavio Magalhaes</a></span>
      </footer>
    </main>
  );
}
