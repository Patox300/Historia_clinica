import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  obtenerPacientePorId,
  actualizarPaciente,
  eliminarPaciente
} from '../db/pacientesDB'
import './detalle.css'
export default function Detalle() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState<any>({})
  const [editando, setEditando] = useState(false)
  const agregarSeguimiento = () => {
    setForm({
      ...form,
      seguimientos: [
        ...(form.seguimientos || []),
        { fecha: '', nota: '' }
      ]
    })
  }

  const actualizarSeguimiento = (index: number, campo: string, valor: string) => {
    const nuevos = [...form.seguimientos]
    nuevos[index][campo] = valor
    setForm({ ...form, seguimientos: nuevos })
  }

   useEffect(() => {
    if (!id) return

    const pacienteId = Number(id)
    if (isNaN(pacienteId)) return

    obtenerPacientePorId(pacienteId).then(paciente => {
      if (paciente) setForm(paciente)
    })
  }, [id])

  const guardarCambios = async () => {
    await actualizarPaciente(form)
    setEditando(false)
    alert('Cambios guardados')
  }

  const borrar = async () => {
    if (confirm('¿Eliminar paciente?')) {
      await eliminarPaciente(form.id)
      navigate('/')
    }
  }

  return (
    <div className='dparent'>
      <link href='https://fonts.googleapis.com/css?family=Great Vibes' rel='stylesheet'></link>
    
    
    <div className="ddiv1">
        <h2>Detalle del paciente</h2>
    </div>
     <div className="ddiv2">
           <table>
          <tbody>
            <tr><td>Nombre:</td><td><input value={form.nombre || ''} disabled={!editando}
                onChange={e => setForm({ ...form, nombre: e.target.value })}/></td></tr>
          </tbody>
         <tr>
            <td>Edad:</td>
            <td>
              <input
                value={form.edad || ''}
                disabled={!editando}
                onChange={e => setForm({ ...form, edad: e.target.value })}
              />
            </td>
          </tr>
        </table>
       <tr>
  <td>
  <td>Antecedentes patológicos heredados:</td>
    <textarea id="textarea"
      className="aph"
      value={form.aph || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, aph: e.target.value })}
      rows={3}
    ></textarea>
  </td>
</tr>

<tr>
  
  <td>
    <td>Antecedentes personales patológicos P:</td>
    <textarea id="textarea"
      value={form.app || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, app: e.target.value })}
      rows={3}
    ></textarea>
  </td>
</tr>

<tr>
  
  <td>
    <td>Nivel de actividad física:</td>
    <textarea id="textarea"
      value={form.af || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, af: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>

    </div>
     <div className="ddiv3">
      <tbody>
        <table>
        <tr>
  <td>
    Sistema Nervioso:
    <textarea
      id="textarea"
      value={form.nervio || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, nervio: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>

<tr>
  <td>
    Sistema Circulatorio:
    <textarea
      id="textarea"
      value={form.circulatorio || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, circulatorio: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>

<tr>
  <td>
    Sistema Digestivo:
    <textarea
      id="textarea"
      value={form.digestivo || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, digestivo: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>

      
                </table>
        <tr><td>Piel / Cabello / Uñas:
            <textarea id="textarea"
      value={form.pcu || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, pcu: e.target.value })}
      rows={2}
    ></textarea></td></tr>
      </tbody>
    </div>
     <div className="ddiv4">
      <tbody>
          <tr><td>Objetivo:</td><td><input value={form.objetivo || ''} disabled={!editando}
                onChange={e => setForm({ ...form, objetivo: e.target.value })}/></td></tr>
        <tr><td>Talla:</td><td><input value={form.talla || ''} disabled={!editando}
                onChange={e => setForm({ ...form, talla: e.target.value })}/></td></tr>
        <tr><td>Peso:</td><td><input value={form.peso || ''} disabled={!editando}
                onChange={e => setForm({ ...form, peso: e.target.value })}/></td></tr>
        <tr><td>Cintura:</td><td><input value={form.cintura || ''} disabled={!editando} onChange={e => setForm({ ...form, cintura: e.target.value })} /></td></tr>
          <tr><td>Cadera:</td><td><input value={form.cadera || ''} disabled={!editando} onChange={e => setForm({ ...form, cadera: e.target.value })} /></td></tr>
          <tr><td>Brazo Izq:</td><td><input value={form.biz || ''} disabled={!editando} onChange={e => setForm({ ...form, biz: e.target.value })} /></td></tr>
          <tr><td>Brazo Der:</td><td><input value={form.bder || ''} disabled={!editando} onChange={e => setForm({ ...form, bder: e.target.value })} /></td></tr>
          <tr><td>% Grasa:</td><td><input value={form.grasa || ''} disabled={!editando} onChange={e => setForm({ ...form, grasa: e.target.value })} /></td></tr>
          <tr><td>% Músculo:</td><td><input value={form.musculo || ''} disabled={!editando} onChange={e => setForm({ ...form, musculo: e.target.value })} /></td></tr>

          <tr><td>Otras:</td><td><input value={form.otras || ''} disabled={!editando} onChange={e => setForm({ ...form, otras: e.target.value })} /></td></tr>
        <h3>Seguimiento de citas</h3>

<table border={1} width="100%">
  <thead>
    <tr>
      <th>#</th>
      <th>Fecha</th>
      <th>Notas</th>
    </tr>
  </thead>
  <tbody>
    {(form.seguimientos || []).map((seg: any, index: number) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <input
            type="date"
            value={seg.fecha}
            disabled={!editando}
            onChange={e =>
              actualizarSeguimiento(index, 'fecha', e.target.value)
            }
          />
        </td>
        <td>
          <textarea id="textdetalle"
            value={seg.nota}
            disabled={!editando}
            rows={2}
            onChange={e =>
              actualizarSeguimiento(index, 'nota', e.target.value)
            }
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>

{editando && (
  <button onClick={agregarSeguimiento}>
    ➕ Agregar seguimiento
  </button>
)}

      </tbody>
    </div>
     <div className="ddiv5">
      <tbody>
        <tr>
  
  <td>
    <td>Alergías:</td>
    <textarea id="textarea"
      value={form.alergias || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, alergias: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>
<tr>
  
  <td>
    <td>Alimentos a evitar:</td>
    <textarea id="textarea"
      value={form.evitar || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, evitar: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>
<tr>
  
  <td>
    <td>Alimentos preferidos:</td>
    <textarea id="textarea"
      value={form.preferidos || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, preferidos: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>
<tr>
  
  <td>
    <td>Ajustes alimenticios extras:</td>
    <textarea id="textarea"
      value={form.extras || ''}
      disabled={!editando}
      onChange={e => setForm({ ...form, extras: e.target.value })}
      rows={2}
    ></textarea>
  </td>
</tr>

            </tbody>
    </div>
    <div className="ddiv6">
      

      <Link to="/"><button>Volver</button></Link><br></br>
      <button onClick={() => setEditando(true)}>Editar</button><br></br>
      <button onClick={guardarCambios} disabled={!editando}>Guardar</button><br></br>
      <button onClick={borrar}>Eliminar</button>
    </div>
    </div>
  )
}
