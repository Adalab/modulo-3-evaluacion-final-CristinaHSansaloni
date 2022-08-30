function FilterByHouse(props) {

    const handleChange = (ev) => {
        props.handleFilterByHouse(ev.target.value) 
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
                <option value="all">Todas</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Slytherin">Slytherin</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
            </select>
        </form>
    );
}
export default FilterByHouse;