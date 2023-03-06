import {useState} from 'react';
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'


function App() {

//Almacenar los pacientes
const[pacienteAlmacenado, setPacienteAlmacenado] = useState([]);
  return (
    <div className='container'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacienteAlmacenado={pacienteAlmacenado}
          setPacienteAlmacenado={setPacienteAlmacenado}
        />
        <ListaPacientes
          //key={}
          pacienteAlmacenado={pacienteAlmacenado}
        />
      </div>
    </div>
    
  )
}

export default App
