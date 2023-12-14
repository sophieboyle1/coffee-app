import axios from "axios";
import Coffees from './coffees';
import { useEffect, useState } from "react";

function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/coffees')
        .then((response) => {
            setData(response.data.myCoffees);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2>Favourite Coffees</h2>
            <Coffees myCoffees={data}></Coffees>
        </div>
    );
}

export default Read;