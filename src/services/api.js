import { v4 as uuidv4 } from 'uuid';

const getDataApi= () => {
    return fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => {
            const dataClean = data.map(character => {
                return {
                    image: character.image,
                    name: character.name,
                    house: character.house,
                    alive: character.alive,
                    gender: character.gender,
                    species: character.species,
                    alternate_names: character.alternate_names,
                    id: uuidv4(),
                    
                };
            });
            return dataClean;
        });
}
export default getDataApi;