import Formulario from './components/Formulario'
import Header from './components/Header'
import Pacientes from './components/Pacientes'

function App() {

  return (
    <div className='container'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario/>
        <Pacientes/>
      </div>
    </div>
    
  )
}

export default App
