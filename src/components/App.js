import { useState, useEffect } from 'react';
import getDataApi from "../services/api";
import CharacterList from './CharacterList';
import Filters from './Filters';
import '../styles/App.css';

function App() {

  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  

  useEffect(()=>{
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataCharacters(dataFromApi);
    })
  }, []);


  const handleByFilterName = (value) => {
    setFilterByName(value);
  }

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  }

 

  const characterFilters = dataCharacters
    .filter((character) => {
     
      return filterByHouse === 'all' ? true : character.house === filterByHouse;
      
    });

  

    // filtro por nombre
    /*const characterFiltersName = dataCharacters
      .filter((character) => {
        return character.name.toLowerCase().includes(filterByName.toLowerCase());
      })*/

  return (
    <>
      <h1 className="title--big">Harry Potter</h1>
      <Filters 
        filterByName={filterByName}
        handleByFilterName={handleByFilterName}
        filterByHouse={filterByHouse}
        handleFilterByHouse={handleFilterByHouse}></Filters>
      <CharacterList characters={characterFilters}></CharacterList>
    </>
  );
}

export default App;