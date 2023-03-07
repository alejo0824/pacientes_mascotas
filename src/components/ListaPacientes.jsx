import {useEffect} from "react"
import Paciente from "./Paciente"

const ListaPacientes = ({pacienteAlmacenado,setEditarPaciente,eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll'>
      {
      (pacienteAlmacenado && pacienteAlmacenado.length > 0) ? ( 
        <>
          <h2 className="capitalize text-center text-3xl font-black">Listado Pacientes </h2>
          <p className="text-center mt-5 text-lg mb-10">Administra tus{' '}
            <span className="text-sky-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacienteAlmacenado.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setEditarPaciente={setEditarPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}        
        </>
      ):( 
        <>
          <h2 className="capitalize text-center text-3xl font-black">No hay pacientes </h2>
          <p className="text-center mt-5 text-lg mb-10">Comienza agregando pacientes{' '}
            <span className="text-sky-600 font-bold">y aparecerán en este lugar</span>
          </p>        
        </>) 
      }
     
    </div>
  )
}

export default ListaPacientes
