import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Produtos from '../pages/Produto';
import { ProtectedRoute } from './ProtectedRoute';
import Register from '../pages/Register';
import ProdutoDetalhe from '../pages/ProdutoDetalhe';



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element= {<Login/>} />
      <Route path="/register" element= {<Register/>} />

     <Route
        path="/produtos"
        element={
          <ProtectedRoute>
            <Produtos />
          </ProtectedRoute>
        }
      />
     <Route
        path="/produtos/:id"
        element={
          <ProtectedRoute>
            <ProdutoDetalhe/>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}