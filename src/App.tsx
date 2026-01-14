import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pacientes from './pages/pacientes'
import AgregarPaciente from './pages/agregarpaciente'
import Detalle from './pages/detalle'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes />} />
        <Route path="/nuevo" element={<AgregarPaciente />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
