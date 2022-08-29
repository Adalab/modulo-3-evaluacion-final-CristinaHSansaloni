
import { Link } from 'react-router-dom';

function CharacterList({characters}){

    const characterList = characters
    .map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
            <li key={character.id} id={character.id}>
                <img
                    src={character.image}
                    
                ></img>
                <h2>{character.name}</h2>
                <h3>{character.species}</h3>
            </li>
        </Link>
    ));
        return (
            <section>
                <ul className="cards">{characterList}</ul>
            </section>
        );

}
export default CharacterList;

