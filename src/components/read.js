import axios from "axios";
import Coffees from './coffees';
import { useEffect, useState } from "react";

function Read() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        // Update my URL when i have it
        axios.get('https://jsonblob.com/api/jsonblob/1184144214337642496')
        .then((response) => {
            setCoffees(response.data.coffees);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2>Hello from my Read Component</h2>
            <Coffees myCoffees={coffees}></Coffees>
        </div>
    );
}

export default Read;