
import imgDefault from '../images/potter.jpg';
import { Link } from 'react-router-dom';

const CharacterDetail=(props)=>{

    const imgEmpty = (image) => {
        return image === '' ? imgDefault : props.character.image;
    };

    return(
        <li className="card" key={props.character.id} id={props.character.id}>
            <Link to="/">Atrás</Link>
                <img className="card__img"
                    src={imgEmpty(props.character.image)}
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 className="card__title">{props.character.name}</h4>
                <p className="card__description">{`Estatus: ${props.character.alive}`}</p>
                <p className="card__description">{`Especie: ${props.character.species}`}</p> 
                <p className="card__description">{`Género: ${props.character.gender}`}</p> 
                <p className="card__description">{`Casa: ${props.character.house}`}</p> 

        </li>
    );
}
export default CharacterDetail;