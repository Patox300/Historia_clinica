import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { obtenerPacientes } from '../db/pacientesDB'
import './pacientes.css'

interface Paciente {
  id: number
  nombre: string
  edad: number
}

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    obtenerPacientes().then(setPacientes)
  }, [])

  const pacientesFiltrados = pacientes.filter(p => {
    return (
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.id.toString().includes(busqueda)
    )
  })

  return (
    
    <div className="parent">
       <link href='https://fonts.googleapis.com/css?family=Great Vibes' rel='stylesheet'></link>
    <div className="div1">   
    <img className="logo"src="/logo.png" alt="Logo de la empresa"></img>
     

    </div>
    <div className="div2">
      <h1 className='h1'>Historia clínica</h1>
    </div>
    <div className="div3">
      <h2 className='h1'>Lic.Sandra Borjas</h2>
    
    </div>
    <div className="div4">
      <input
    type="text"
    className="buscador"
    placeholder="Filtrar por nombre"
    value={busqueda}
    onChange={e => setBusqueda(e.target.value)}
    /> <Link to="/nuevo">
        <button>➕ Agregar paciente</button>
      </Link>
  <br /><br />
     </div>
  <div className="div5">
     {pacientesFiltrados.length === 0 && (
        <p>No hay resultados</p>
      )}
      
      <ul className="lista-pacientes">
  {pacientesFiltrados.map(p => (
    <li key={p.id} className="paciente-card">
      <img className="vec"src="/vec.png"></img>
      <span>
          

        {p.nombre} - {p.edad} años
      </span>

      <Link to={`/detalle/${p.id}`}>
        <button>Ver detalle</button>
      </Link>
    </li>
  ))}
</ul>
  </div>
    </div>
  )
}
