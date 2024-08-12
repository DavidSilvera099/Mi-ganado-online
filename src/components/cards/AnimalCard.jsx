import React from 'react'

const AnimalCard = ({ animal }) => {
    return (
        <div className="mb-4 w-full md:w-1/3 px-2">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                <img
                    src={animal.photoUrl || 'https://via.placeholder.com/150'}
                    className="object-cover h-full w-full"
                    alt={animal.name || 'Animal image'}
                    loading='lazy'
                />
                <div className="p-4">
                    <h5 className="text-xl font-bold text-Azul mb-2">{animal.Nombre || 'Sin nombre'}</h5>
                    <p className="text-Turquesa">
                        <strong>Sexo:</strong> {animal.Sexo || 'N/A'} <br />
                        <strong>Tipo:</strong> {animal.Tipo || 'N/A'} <br />
                        <strong>Estado:</strong> {animal.Estado || 'N/A'} <br />
                        <strong>Año:</strong> {animal.Edad || 'N/A'} <br />
                        <strong>Crías:</strong> {animal.Crias || 'N/A'} <br />
                        <strong>Número de crías:</strong> {animal.Numero_de_crias || 'N/A'} <br />
                        <strong>Observaciones:</strong> {animal.Observaciones || 'N/A'} <br />
                        <strong>Vacunas:</strong> {animal.Vacunas || 'N/A'} <br />
                        <strong>Peso:</strong> {animal.Peso || 'N/A'} <br />
                        <strong>Nacimiento:</strong> {animal.Nacimiento || 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AnimalCard

