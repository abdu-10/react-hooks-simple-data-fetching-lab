import React, { useEffect, useState} from "react";

function App(){
    const [dog, setDog] = useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then((data)=>(
            setDog(data.message)
        ))
    }, [])
    
    
    return ( (!dog)? <p>Loading...</p> : <img src={dog} alt="A Random Dog"/>)
}

export default App;