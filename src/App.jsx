import {useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'


function App() {

//Guardar pacientes y no se borren al recargar
const INICIO = JSON.parse(localStorage.getItem('pacienteAlmacenado')) ?? [];
//Almacenar los pacientes
const[pacienteAlmacenado, setPacienteAlmacenado] = useState(INICIO);
//Editar Paciente
const[editarPaciente,setEditarPaciente] = useState({});

useEffect(()=>{
  localStorage.setItem('pacienteAlmacenado', JSON.stringify(pacienteAlmacenado))
},[pacienteAlmacenado])

const  eliminarPaciente = (id) => {
  const pacientesActuales = pacienteAlmacenado.filter( paciente => paciente.id !==id);
  setPacienteAlmacenado(pacientesActuales);
}

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacienteAlmacenado={pacienteAlmacenado}
          setPacienteAlmacenado={setPacienteAlmacenado}
          editarPaciente={editarPaciente}
          setEditarPaciente={setEditarPaciente}
        />
        <ListaPacientes
          pacienteAlmacenado={pacienteAlmacenado}
          setEditarPaciente={setEditarPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
    
  )
}

export default App
