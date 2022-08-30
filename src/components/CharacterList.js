
import '../styles/CharacterList.scss';
import imgDefault from '../images/potter.jpg';
import { Link } from 'react-router-dom';

function CharacterList({characters}){

    const characterList = characters
    .map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
            <li key={character.id} id={character.id} className="list__card">
                <img className="list__img"
                    src={character.image || imgDefault}
                    
                ></img>
                <h2>{character.name}</h2>
                <h3>{character.species}</h3>
            </li>
        </Link>
    ));
        return (
            <section className="list">
                <ul className="list__element">{characterList}</ul>
            </section>
        );

}
export default CharacterList;

