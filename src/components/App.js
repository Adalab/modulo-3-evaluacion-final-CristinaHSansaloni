import '../styles/App.scss';
// api - ls
import getDataApi from "../services/api";
import localStorage from '../services/localStorage';
// components
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
// hooks
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';


function App() {
  
  const [dataCharacters, setDataCharacters] = useState(localStorage.get('dataCharacter', []));
  const [filterByName, setFilterByName] = useState(localStorage.get('filterByName', ""));
  const [filterByHouse, setFilterByHouse] = useState('Gryffindor');
  


  useEffect(() => {
    getDataApi().then((dataFromApi) => {
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
    })
    .filter(character=>{
      return character.name.toLowerCase().includes(filterByName.toLowerCase());
    });

    
    const { pathname } = useLocation();
    const dataPath = matchPath('/character/:characterId', pathname);

    const characterId = dataPath !== null ? dataPath.params.characterId : null;
    const characterFound = dataCharacters.find((character) => { 
      return character.id === characterId;
    });

  
  return (
    <div className="container">
      <Header />

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
                  handleFilterByHouse={handleFilterByHouse}/>
              </section>

              <section className="cards">
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
    </div>
  );
}

export default App;