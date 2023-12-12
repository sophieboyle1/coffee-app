import CoffeeItem from "./coffeeItems";

function Coffees(props) {
    return props.myCoffees.map((coffee) => {
        // Ensure you pass the entire coffee object as a prop
        // Also, use 'id' as the key, since 'isbn' is no longer a property
        return <CoffeeItem myCoffee={coffee} key={coffee.id}></CoffeeItem>
    });
}

export default Coffees;
