import React from 'react';
import { useStateValue } from "../StateProvider";

function Life() {
    const [{ name , age} , dispatch] = useStateValue();
    return (
        <div>
          <h1>Hello Context Api</h1>
        <h1>Your Name is : {name}</h1>  
        <h1> Your Age is : {age}</h1>
        </div>
    )
}

export default Life
