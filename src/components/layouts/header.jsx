import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <nav className="text-lg p-4 shadow-lg w-full mb-4">
            <div className="container mx-auto gap-y-3 flex flex-col items-center">
                <a className='w-32' href='/'>
                    <img src="/logovac.png" alt="Logo" className="object-cover" />
                </a>
                <ul className="flex justify-center gap-x-8">
                    <li className="font-semibold">
                        <a className="text-VerdeMusgo hover:text-Turquesa" aria-current="page" href="/AnimalsView">Animales</a>
                    </li>
                    <li className="font-semibold">
                        <Link className="text-VerdeMusgo hover:text-Turquesa" to="/AdminView">Administrar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default header