import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'
import Pacientes from './components/ListaPacientes'

function App() {

  return (
    <div className='container'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario/>
        <ListaPacientes/>
      </div>
    </div>
    
  )
}

export default App
