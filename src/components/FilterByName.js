import localStorage from '../services/localStorage';

function FilterByName(props) {

    const handleByFilterName = (ev) => {
        props.handleByFilterName(ev.target.value);
        ev.preventDefault();
        localStorage.set('name', ev.target.value);
    };

    return(
        <>
            <form className="form">
                <label className="form__label" htmlFor="name">Busca por personaje: </label>
                <input 
                className="form__input-text" 
                type="text" 
                name="name" 
                id="name"
                value={localStorage.get('name', '')}
                onChange={handleByFilterName}>
                </input>
            </form>
        </>
    );
}
export default FilterByName;