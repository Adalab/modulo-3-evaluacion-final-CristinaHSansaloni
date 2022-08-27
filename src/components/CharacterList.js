import CharacterCard from "./CharacterCard";

function CharacterList(props){

    const characterElements = props.characters.map((character) => {
        return (
            <CharacterCard character={character}></CharacterCard>
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