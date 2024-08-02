import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../controllers/firebase/firebaseConfig';
import Swal from 'sweetalert2';



const ShowAnimals = () => {
    //hooks
    const [products, setProducts] = useState([])
    //Referenciar db
    const animalsCollection = collection(db, 'animals')
    //Show docs
    const ShowAnimals = async () => {
        const data = await getDocs(animalsCollection)
        console.log(data)
    }
    //Delete docs

    useEffect(() => {
        ShowAnimals()
    }, [])

    return (
        <div>ShowAnimals</div>
    )
}

export default ShowAnimals;