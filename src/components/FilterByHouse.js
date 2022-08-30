function FilterByHouse(props) {

    const handleChange = (ev) => {
        props.handleFilterByHouse(ev.target.value)
        ev.preventDefault(); 
    }
    return(
        <form className="form">
            <label
                className="form__label"
                htmlFor="house">Selecciona la casa: </label>
            <select
                className="form__input-text"
                name="house"
                id="house"
                value={props.FilterByHouse}
                onChange={handleChange}>
                <option defaultValue="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="all">Todas</option>
            </select>
        </form>
    );
}
export default FilterByHouse;