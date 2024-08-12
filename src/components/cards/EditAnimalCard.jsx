import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AnimalEditCard = ({ animal, onDelete, editPath }) => {
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Eliminar',
            text: "¿Seguro que quieres eliminar este animal?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                onDelete(id).then(() => {
                    Swal.fire(
                        'Eliminado!',
                        'El animal ha sido eliminado con éxito.',
                        'success'
                    );
                }).catch((error) => {
                    Swal.fire(
                        'Error',
                        'Hubo un problema al eliminar el animal: ' + error.message,
                        'error'
                    );
                });
            }
        });
    }

    return (
        <div className="relative mb-4 w-full max-w-md px-2">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                <img
                    src={animal.photoUrl || 'https://via.placeholder.com/150'}
                    className="object-cover h-60 w-full"
                    alt={animal.name || 'Animal image'}
                    loading='lazy'
                />
                <div className="p-4">
                    <h5 className="text-xl font-bold text-Azul mb-2">{animal.name || 'Sin nombre'}</h5>
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
                    <div className="absolute right-8 top-64">
                        <Link to={editPath}><i className="fa-solid fa-pen-to-square text-Turquesa text-xl mr-3 shadow-md"></i></Link>
                        <button onClick={() => handleDelete(animal.id)}><i className="fa-solid fa-trash text-xl text-Turquesa shadow-md"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimalEditCard;
