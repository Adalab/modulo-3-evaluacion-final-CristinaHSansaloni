function FilterByName(props) {

    const handleChangeName = (ev) => {
        props.handleByFilterName(ev.target.value)
    }

    return(
        <>
            <form>
                <label className="form__label" htmlFor="name">Busca por personaje: </label>
                <input 
                className="form__input-text" 
                type="text" 
                name="name" 
                id="name"
                value={props.FilterByName}
                onChange={handleChangeName}>

                </input>
            </form>
        </>
    );
}
export default FilterByName;