// create your App component here
import React, {useState, useEffect} from "react"


function App(){

    const [dog, setDog] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDog(data.message);
            });
    },  []);

    return ((dog === null) ? (<p>Loading...</p>) : (<img src={dog} alt="A Random Dog" />));

}

export default App;