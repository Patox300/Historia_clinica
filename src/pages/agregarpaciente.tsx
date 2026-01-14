import { useState } from 'react'
import { agregarPaciente } from '../db/pacientesDB'
import type { Paciente } from '../db/pacientesDB'
import { Link } from 'react-router-dom'

import './agregarpaciente.css'

export default function AgregarPaciente() {

  const [form, setForm] = useState<Omit<Paciente, 'id'>>({
    nombre: '',
    edad: 0,
    aph: '',
    app: '',
    af: '',
    nervio: '',
    circulatorio: '',
    digestivo: '',
    pcu: '',
    objetivo: 0,
    talla: 0,
    peso: 0,
    cintura: 0,
    cadera: 0,
    biz: 0,
    bder: 0,
    grasa: 0,
    musculo: 0,
    otras: '',
    alergias: '',
    evitar: '',
    preferidos: '',
    extras: ''
  })

  const guardar = async () => {
    await agregarPaciente(form)
    alert('Paciente guardado')
  }

  return (
    <div className="aparent">
        <link href='https://fonts.googleapis.com/css?family=Great Vibes' rel='stylesheet'></link>
    <div className="adiv1">
      <h2>Agregar paciente</h2>
    </div>
    
      
    <div className="adiv2">
      <table>
      <input placeholder="Nombre"
        onChange={e => setForm({ ...form, nombre: e.target.value })} /><br></br>

      <input placeholder="Edad" type="number"
        onChange={e => setForm({ ...form, edad: Number(e.target.value) })} />
      
    <textarea id="textarea" placeholder="Antecedentes patológicos heredados"
      value={form.aph || ''}
      onChange={e => setForm({ ...form, aph: e.target.value })}
      rows={2}
    ></textarea>
    <textarea id="textarea" placeholder="Antecedentes patológicos personales"
      value={form.app || ''}
      onChange={e => setForm({ ...form, app: e.target.value })}
      rows={2}
    ></textarea>
    <textarea id="textarea" placeholder="Nivel de actividad física"
      value={form.af || ''}
      onChange={e => setForm({ ...form, af: e.target.value })}
      rows={2}
    ></textarea>
    </table>
    </div>
    <div className="adiv3">
      <table>
      <textarea id="textarea" placeholder="Sintomas del sistema nervioso"
      value={form.nervio || ''}
      onChange={e => setForm({ ...form, nervio: e.target.value })}
      rows={2}
    ></textarea>
    <textarea id="textarea" placeholder="Sintomas del sistema circulatorio"
      value={form.circulatorio || ''}
      onChange={e => setForm({ ...form, circulatorio: e.target.value })}
      rows={2}
    ></textarea>
    <textarea id="textarea" placeholder="Sintomas del sistema digestivo"
      value={form.digestivo || ''}
      onChange={e => setForm({ ...form, digestivo: e.target.value })}
      rows={2}
    ></textarea>
    <textarea id="textarea" placeholder="Piel, cabello y uñas"
      value={form.pcu || ''}
      onChange={e => setForm({ ...form, pcu: e.target.value })}
      rows={2}
    ></textarea>
      </table>
    </div>


    <div className="adiv4">
      <table>
       <input placeholder="Objetivo" type="number"
        onChange={e => setForm({ ...form, objetivo: Number(e.target.value) })} /><br></br>

      <input placeholder="Talla" type="number"
        onChange={e => setForm({ ...form, talla: Number(e.target.value) })} /><br></br>

      <input placeholder="Peso" type="number"
        onChange={e => setForm({ ...form, peso: Number(e.target.value) })} /><br></br>

      <input placeholder="Cintura" type="number"
        onChange={e => setForm({ ...form, cintura: Number(e.target.value) })} /><br></br>

      <input placeholder="Cadera" type="number"
        onChange={e => setForm({ ...form, cadera: Number(e.target.value) })} /><br></br>

      <input placeholder="Brazo izquierdo" type="number"
        onChange={e => setForm({ ...form, biz: Number(e.target.value) })} /><br></br>

      <input placeholder="Brazo derecho" type="number"
        onChange={e => setForm({ ...form, bder: Number(e.target.value) })} /><br></br>
        <input placeholder="Porcentaje de grasa" type="number"
        onChange={e => setForm({ ...form, grasa: Number(e.target.value) })} /><br></br>
        <input placeholder="Porcentaje de músculo" type="number"
        onChange={e => setForm({ ...form, musculo: Number(e.target.value) })} /><br></br>

      <input placeholder="Otras medidas"
        onChange={e => setForm({ ...form, otras: e.target.value })} />
      </table>
    </div>
      <div className="adiv5">
      <table>
         <textarea id="textarea" placeholder="Alergias a alimentos"
      value={form.alergias || ''}
      onChange={e => setForm({ ...form, alergias: e.target.value })}
      rows={2}
      ></textarea>
       <textarea id="textarea" placeholder="Alimentos a evitar"
      value={form.evitar || ''}
      onChange={e => setForm({ ...form, evitar: e.target.value })}
      rows={2}
      ></textarea>
       <textarea id="textarea" placeholder="Alimentos preferidos"
      value={form.preferidos || ''}
      onChange={e => setForm({ ...form, preferidos: e.target.value })}
      rows={2}
      ></textarea>
      <textarea id="textarea" placeholder="Ajustes alimenticios extras"
      value={form.extras|| ''}
      onChange={e => setForm({ ...form, extras: e.target.value })}
      rows={2}
      ></textarea>
      </table>
      </div>
      <div className="adiv6">
      <br />

      <button onClick={guardar}>Guardar</button>
      <br /><br />
      <Link to="/">
        <button>Volver al menú</button>
      </Link>
      </div>
      
    </div>
  )
}
