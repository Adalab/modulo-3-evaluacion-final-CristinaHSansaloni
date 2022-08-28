import { useState, useEffect } from 'react';
import getDataApi from "../services/api";
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import {Route, Routes} from 'react-router-dom';
import {useLocation, matchPath} from 'react-router-dom';
import '../styles/App.css';

function App() {

  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");
  

  useEffect(()=>{
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

    //Obtener el ide del usuario clic
   const { pathname } = useLocation();
    const dataPath = matchPath("/user/:userId", pathname);

    const userId = dataPath !== null ? dataPath.params.userId : null;
    const characterFound = dataCharacters.find(user => { return user.id === userId});

  
  return (
    <>
      <h1 className="title--big">Harry Potter</h1>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Filters 
                filterByName={filterByName}
                handleByFilterName={handleByFilterName}
                filterByHouse={filterByHouse}
                handleFilterByHouse={handleFilterByHouse}></Filters>
              <CharacterList characters={characterFilters}></CharacterList>
            </>
          }
        />
        <Route 
          path='/user/:userId'
          element={
            <CharacterDetail character={characterFound} />
          }
        />
      </Routes>

    </>
  );
}

export default App;