import { useState, useEffect } from 'react';
import getDataApi from "../services/api";
import CharacterList from './CharacterList';
import Filters from './Filters';
//import '../styles/App.css';

function App() {

  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");//inicializa con Gryffindor?

  useEffect(()=>{
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataCharacters(dataFromApi);
    })
  }, []);

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  }

  const characterFilters = dataCharacters
    .filter((character) => {
      if (filterByHouse === 'all') {
        return true;
      } else {
        return character.house === filterByHouse;
      }  
    });

  return (
    <>
      <h1 className="title--big">Harry Potter</h1>
      <Filters 
        filterByHouse={filterByHouse}
        handleFilterByHouse={handleFilterByHouse}></Filters>
      <CharacterList characters={characterFilters}></CharacterList>
    </>
  );
}

export default App;