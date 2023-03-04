import Paciente from "./Paciente"

const ListaPacientes = () => {

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll'>
      <h2 className="capitalize text-center text-3xl font-black">Listado Pacientes </h2>
      <p className="text-center mt-5 text-lg mb-10">Administra tus{' '}
          <span className="text-sky-600 font-bold">Pacientes y Citas</span>
      </p>      
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
    </div>
  )
}

export default ListaPacientes
