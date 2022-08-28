
import CharacterCard from "./CharacterCard";

function CharacterList(props){

    const characterElements = props.characters.map((item) => {
        return (
            <CharacterCard character={item}></CharacterCard>
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


