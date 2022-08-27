
function CharacterCard(props) {
    return(
        <li className="card">
        <a href="#">
            <img className="card__img"
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}></img>
            <h4 className="card__title">{props.character.name}</h4>
            <p className="card__description">{`Estatus: ${props.character.alive} Especie: ${props.character.species} Género: ${props.character.gender} Casa: ${props.character.house}`}</p>
        </a>
    </li>
    );
}
export default CharacterCard;