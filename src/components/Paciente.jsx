const Paciente = () => {
  return (
    <div className="bg-white mx-5 py-10 px-5 shadow-lg rounded-lg mb-5">
        <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>Nacha
        </p>

        <p className="mb-2"><span className="uppercase font-bold text-gray-700">Propietario:{' '}</span>Alejandro Tellez
        </p>

        <p className="mb-2"><span className="uppercase font-bold text-gray-700">Email:{' '}</span>correo@correo.com
        </p>

        <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>05-03-23
        </p>

        <p className="mb-2"><span className="uppercase font-bold text-gray-700">Nombre:{' '}</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita aliquid molestias qui, reprehenderit unde eos quia fugit! Unde provident amet fuga corporis quis sit quisquam voluptates tempore maxime enim.
        </p>

        <div className="flex justify-between mt-4">
            <button className="bg-sky-600 px-10 py-2 uppercase text-white font-bold rounded-md hover:bg-sky-700">Editar</button>
            <button className="bg-red-600 px-10 py-2 uppercase text-white font-bold rounded-md hover:bg-red-700">Editar</button>
        </div>
    </div>
  )
}

export default Paciente
