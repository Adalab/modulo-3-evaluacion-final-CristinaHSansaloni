import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {
    /*const handleSubmit = (ev) => {
        ev.preventDefault();
    };*/

    return(
        <>
            <FilterByName 
                filterByName={props.filterByName} handleByFilterName={props.handleByFilterName} />

            <FilterByHouse
                filterByHouse={props.filterByHouse}
                handleFilterByHouse={props.handleFilterByHouse}/>
        
        </>

            
    );
}
export default Filters;