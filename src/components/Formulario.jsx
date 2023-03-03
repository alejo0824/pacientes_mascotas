const Formulario = () => {
  return (
    <div className=' md:w-1/2 lg:w-2/5 mx-3'>
        <h2 className="capitalize text-center text-3xl font-black">seguimiento pacientes </h2>
        <p className="text-center mt-5 text-lg mb-10">Añade pacientes y {''}
            <span className="text-sky-700 font-bold">Administralos</span>
        </p>

        <form className="bg-white py-10 px-5 rounded-lg shadow-md mb-10">
            <div className="mb-5">
                <label htmlFor="mascota" className="uppercase text-gray-700 font-bold">Nombre de la Mascota</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="text" 
                    id="mascota"
                    placeholder="Nombre de la Mascota"
                />
            </div>  

            <div className="mb-5">
                <label htmlFor="propietario" className="uppercase text-gray-700 font-bold">Nombre del Propietario</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="text" 
                    id="propietario"
                    placeholder="Nombre del propietario"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="uppercase text-gray-700 font-bold">Email</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="email" 
                    id="email"
                    placeholder="Email"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="uppercase text-gray-700 font-bold">Fecha de Alta</label>
                <input
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    type="date" 
                    id="alta"
                />
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="uppercase text-gray-700 font-bold">Síntomas</label>
                <textarea
                    id="sintomas"
                    className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-lg"
                    placeholder="Describe los síntomas"
                />
            </div>

            <input
                type="submit"
                className=" bg-sky-700 w-full uppercase text-white font-bold p-3 hover:bg-sky-800 cursor-pointer transition-all"
                value="Agregar Paciente"
            />
        </form>
    </div>
  )
}

export default Formulario
