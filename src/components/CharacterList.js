
import CharacterCard from "./CharacterCard";

function CharacterList(props){

    const characterElements = props.characters.map((item, index) => {
        return (
            <CharacterCard character={item} key={index}></CharacterCard>
        );
    });

    return (
        <section>
            <ul className="cards">
                {characterElements}
            </ul>
        </section>
    )

}
export default CharacterList;

