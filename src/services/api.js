
const getDataApi=()=>{
    return fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => {
            const dataClean = data.map(item=>{
                return {
                    image: item.image,
                    name: item.name,
                    house: item.house,
                    alive: item.alive,
                    gender: item.gender,
                    species: item.species,
                    alternate_names: item.alternate_names
                    //id:
                }
            });
            return dataClean;
        });
}
export default getDataApi;