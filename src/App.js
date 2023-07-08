import './App.css';
import axios from "axios";
import {useState , useEffect} from "react"


// https://gateway.marvel.com:443/v1/public/characters?apikey=8d08084d027da08f5032e2256a0a9876

//key public: 8d08084d027da08f5032e2256a0a9876

// key private: a3b4c9010e4ae1e35e9e5f9cc950fcaf9a5dffa5

// ts: 1

// md5: 

//hash: 650e704a8c12c0b3f04a7478a6e05d0d







function App() {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8d08084d027da08f5032e2256a0a9876&hash=650e704a8c12c0b3f04a7478a6e05d0d').then(res=> {
      setPersonajes(res.data.data.results)
    }).catch(error=>console.log(error))
  }, [])

  console.log(personajes);










  return (
    <>
      <h1>Marvel</h1>
    </>
  )
 
}

export default App;
