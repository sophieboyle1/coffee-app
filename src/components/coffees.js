import CoffeeItem from "./coffeeItems";

function Coffees(props){
    if (!Array.isArray(props.myCoffees)) {
        // If `myCoffees` is not an array, return a fallback UI or null
        return <div>Loading...</div>;
    }

    return props.myCoffees.map((coffee) => {
        return <CoffeeItem myCoffee={coffee} key={coffee.id}></CoffeeItem>
    });
}

export default Coffees;