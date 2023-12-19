import axios from "axios";
import Coffees from './coffees';
import { useEffect, useState } from "react";

function Read() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get('http://localhost:4000/api/coffees')
            .then((response) => {
                // Assuming the response structure is consistent and has a 'myCoffees' field
                setData(response.data.myCoffees);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Coffees myCoffees={data} setMyCoffees={setData} ReloadData={fetchData}></Coffees>
        </div>
    );
}

export default Read;