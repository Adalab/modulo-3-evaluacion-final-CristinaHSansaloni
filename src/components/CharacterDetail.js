import '../styles/CharacterDetail.scss';
import imgDefault from '../images/potter.jpg';
import { Link } from 'react-router-dom';

const CharacterDetail=(props)=>{

  

    return(
        <section className="detail">
            <Link to="/" className="detail__link">Atrás</Link>
                <article className="detail__container">
                    <img className="detail__img"
                        src={props.character.image || imgDefault}
                        alt={`Foto de ${props.character.name}`}
                        title={`Foto de ${props.character.name}`}></img>
                    <h4 className="detail__title">{props.character.name}</h4>
                    <p className="detail__description">{`Estatus: ${props.character.alive}`}</p>
                    <p className="detail__description">{`Especie: ${props.character.species}`}</p> 
                    <p className="detail__description">{`Género: ${props.character.gender}`}</p> 
                    <p className="detail__description">{`Casa: ${props.character.house}`}</p> 
                </article>

        </section>
    );
}
export default CharacterDetail;