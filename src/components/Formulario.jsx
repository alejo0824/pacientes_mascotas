import {useState,useEffect} from "react";
import Error from './Error';

const Formulario = ({pacienteAlmacenado,setPacienteAlmacenado,editarPaciente,setEditarPaciente}) => {
    const [mascota,setMascota] = useState('');
    const [propietario,setPropietario] = useState('');
    const [correo,setcorreo] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');
    const [error,setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if([mascota,propietario,correo,fecha,sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);

        const objPaciente ={
            mascota,
            propietario,
            correo,
            fecha,
            sintomas,
        }

        if(editarPaciente.id){
            objPaciente.id = editarPaciente.id;
            const pacienteActualizado = pacienteAlmacenado.map(pacienteState => pacienteState.id === editarPaciente.id ? objPaciente : pacienteState);            
            setPacienteAlmacenado(pacienteActualizado);
            setEditarPaciente({}); // → Ya está editado, debemos limpiarlo, sino seguira editando            
        }
        else {
            objPaciente.id = generarID();
            setPacienteAlmacenado([...pacienteAlmacenado,objPaciente]);
        }
        
        //Limpiar los campos
        setMascota('');
        setPropietario('');
        setcorreo('');
        setFecha('');
        setSintomas('')
       //
    }

    const generarID = () =>{
        const random = Math.random().toString(36).slice(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    useEffect(()=>{
        if(Object.keys(editarPaciente).length > 0){
            setMascota(editarPaciente.mascota);
            setPropietario(editarPaciente.propietario);
            setcorreo(editarPaciente.correo);
            setFecha(editarPaciente.fecha);
            setSintomas(editarPaciente.sintomas);
        }
    },[editarPaciente])

    return (
    <div className=' md:w-1/2 lg:w-2/5 mx-3'>
        <h2 className="capitalize text-center text-3xl font-black">seguimiento pacientes </h2>
        <p className="text-center mt-5 text-lg mb-10">Añade pacientes y {''}
            <span className="text-sky-600 font-bold">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white py-10 px-5 rounded-lg shadow-md mb-10">

            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <div className="mb-5">
                <label htmlFor="mascota" className="uppercase text-gray-700 font-bold">Nombre de la Mascota</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="text" 
                    id="mascota"
                    placeholder="Nombre de la Mascota"
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value)}
                />
            </div>  

            <div className="mb-5">
                <label htmlFor="propietario" className="uppercase text-gray-700 font-bold">Nombre del Propietario</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="text" 
                    id="propietario"
                    placeholder="Nombre del propietario"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="uppercase text-gray-700 font-bold">Email</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="email" 
                    id="email"
                    placeholder="Email"
                    value={correo}
                    onChange={(e) => setcorreo(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="uppercase text-gray-700 font-bold">Fecha de Alta</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="date" 
                    id="alta"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="uppercase text-gray-700 font-bold">Síntomas</label>
                <textarea
                    id="sintomas"
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Describe los síntomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className=" bg-sky-600 w-full uppercase text-white font-bold p-3 hover:bg-sky-700 cursor-pointer transition-all"
                value={editarPaciente.id ? 'Editar Paciente': 'Agregar Paciente'}
            />
        </form>
    </div>
    )
}

export default Formulario
