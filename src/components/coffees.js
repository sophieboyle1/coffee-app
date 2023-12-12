import CoffeeItem from "./coffeeItems";

function Coffees(props) {
    console.log(props.myCoffees); // Check the value here
    if (!Array.isArray(props.myCoffees)) {
        // This will handle any case where myCoffees is not an array.
        // You can render a placeholder, a loading spinner, or null, depending on your needs.
        return <div>Loading...</div>; // Or "No coffees available" or similar message.
    }

    return props.myCoffees.map((coffee) => {
        return <CoffeeItem myCoffee={coffee} key={coffee.id}></CoffeeItem>
    });
}

export default Coffees;
