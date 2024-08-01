import { useState } from 'react'
import './App.css'
import {uploadFile} from './controllers/firebase/firebaseConfig';

function App() {

  const [file, setfile] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await uploadFile(file)
      console.log(result)
      alert ('imagen subida')
    } catch (error) {
      console.log(error)
      alert('Error al subir la imagen')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file-input" id="file" onChange={ e => setfile(e.target.files[0])} />
      <button>
        subir
      </button>
    </form>
  )
}

export default App
