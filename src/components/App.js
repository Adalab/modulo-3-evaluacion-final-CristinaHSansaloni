import { useState, useEffect } from 'react';
import getDataApi from "../services/api";
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import {Route, Routes} from 'react-router-dom';
import {useLocation, matchPath} from 'react-router-dom';
import localStorage from '../services/localStorage';
import '../styles/App.css';


function App() {
  //tomo actual del data y actual del filter si los hay
  const [dataCharacters, setDataCharacters] = useState(localStorage.get('dataCharacter', []));
  const [filterByName, setFilterByName] = useState(localStorage.get('filterByName', ""));
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  

  //cuando carga la página, datos de fetch dentro del useEffect, sino los toma de ls
  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    })
  }, []);

 


  const handleByFilterName = (value) => {
    //localStorage.set('name', value);
    setFilterByName(value);
    
  }

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  }

 

  const characterFilters = dataCharacters
    .filter((character) => {
     
      return filterByHouse === 'all' ? true : character.house === filterByHouse;
      
    })
    .filter(character=>{
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    });

    //Obtener el ide del usuario clic
    const { pathname } = useLocation();
    const dataPath = matchPath('/character/:characterId', pathname);

    const characterId = dataPath !== null ? dataPath.params.characterId : null;
    const characterFound = dataCharacters.find((character) => { 
      return character.id === characterId;
    });

  
  return (
    <>
      <header className="header">
        <h1 className="header__title">Harry Potter</h1>
      </header>

      <Routes>
        <Route
          path='/'
          element={
            <main className="main">
              <section className="input">
                <Filters 
                  filterByName={filterByName}
                  handleByFilterName={handleByFilterName}
                  filterByHouse={filterByHouse}
                  handleFilterByHouse={handleFilterByHouse} />
              </section>

              <section className="list">
                <CharacterList characters={characterFilters} />
              </section>  
              
            </main>
          }
        />
        <Route 
          path='/character/:characterId'
          element={
            <CharacterDetail character={characterFound} />
          }
        />
      </Routes>
    </>
  );
}

export default App;