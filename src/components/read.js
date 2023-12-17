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
    }, []
    );
    const Reload = (e) => {
        axios.get('http://localhost:4000/api/coffees')
            .then(
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <Coffees myCoffees={data} ReloadData={Reload}></Coffees>
        </div>
    );
}


export default Read;