import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";

function Filters(props) {

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