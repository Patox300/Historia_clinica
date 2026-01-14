import { openDB } from 'idb'

export interface Paciente {
  id: number
  nombre: string
  edad: number
  aph: string
  app: string
  af: string
  nervio: string
  circulatorio: string
  digestivo: string
  pcu: string
  objetivo: number
  talla: number
  peso: number
  cintura: number
  cadera: number
  biz: number
  bder: number
  grasa:  number
  musculo:  number
  otras: string
  alergias: string
  evitar: string
  preferidos: string
  extras: string
}

const dbPromise = openDB('pacientesDB', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('pacientes')) {
      db.createObjectStore('pacientes', {
        keyPath: 'id',
        autoIncrement: true
      })
    }
  }
})

export async function obtenerPacientes(): Promise<Paciente[]> {
  const db = await dbPromise
  return db.getAll('pacientes')
}

export async function obtenerPacientePorId(
  id: number
): Promise<Paciente | undefined> {
  const db = await dbPromise
  return db.get('pacientes', id)
}

export async function agregarPaciente(
  paciente: Omit<Paciente, 'id'>
): Promise<void> {
  const db = await dbPromise
  await db.add('pacientes', paciente)
}


export async function actualizarPaciente(
  paciente: Paciente
): Promise<void> {
  const db = await dbPromise
  await db.put('pacientes', paciente)
}

export async function eliminarPaciente(
  id: number
): Promise<void> {
  const db = await dbPromise
  await db.delete('pacientes', id)
}
