import FilterByHouse from "./FilterByHouse";

function Filters(props) {

    return(
        
        <FilterByHouse
            filterByHouse={props.filterByHouse}
            handleFilterByHouse={props.handleFilterByHouse}></FilterByHouse>

        //<FilterByName></FilterByName>
    );

}
export default Filters;