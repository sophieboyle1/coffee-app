import CoffeeItem from "./coffeeItems";

function Coffees(props){
    if (!Array.isArray(props.myCoffees)) {
        // If `myCoffees` is not an array, return a fallback UI or null
        return <div>Coffee Deleted</div>;
    }

    return props.myCoffees.map((coffee) => {
        return <CoffeeItem myCoffee={coffee} key={coffee.id} ReloadData={props.ReloadData}></CoffeeItem>
    });
}

export default Coffees;