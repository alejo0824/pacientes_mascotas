const Paciente = ({paciente,setEditarPaciente,eliminarPaciente}) => {
    
    const {mascota,propietario,correo,fecha,sintomas,id} = paciente;

    const handleEliminar = () => {
        const confirmacion = confirm('Desea eliminar este usuario');
        if (confirmacion){
            eliminarPaciente(id);
        }
    }

    return (
        <div className="bg-white mx-5 py-10 px-5 shadow-lg rounded-lg mb-5">
            <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>{mascota}
            </p>

            <p className="mb-2"><span className="uppercase font-bold text-gray-700">Propietario:{' '}</span> {propietario}
            </p>

            <p className="mb-2"><span className="uppercase font-bold text-gray-700">Email:{' '}</span>{correo}
            </p>

            <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>{fecha}
            </p>

            <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>{sintomas}
            </p>

            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    className="bg-sky-600 px-10 py-2 uppercase text-white font-bold rounded-md hover:bg-sky-700"
                    onClick={() => setEditarPaciente(paciente)}
                >Editar</button>
                <button 
                    type="button"
                    className="bg-red-600 px-10 py-2 uppercase text-white font-bold rounded-md hover:bg-red-700"
                    onClick={handleEliminar}>
                        Eliminar
                    </button>
            </div>
        </div>
    )
}

export default Paciente
