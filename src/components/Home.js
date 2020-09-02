import React from 'react';
import Button from "@material-ui/core/Button";
import './Home.css';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';

function Home() {
    const [name, setName] = React.useState("");
    const [age , setAge] = React.useState("");
    const history = useHistory();
    const [{}, dispatch] = useStateValue();
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/life");
        dispatch({
            type : "CONTEXT_API_NIDHI",
            name : name,
            age : age
        })
    }
    return (
        <form className="information">
            <div className="information__inputTags">
                <input type="text" value = {name} onChange={(e) => setName(e.target.value)}
                />
                <input type="text" value = {age} onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="information__buttons">
                <Button type="submit" onClick={handleSubmit} variant="outlined">Submit</Button>
            </div>
        </form>
    )
}

export default Home
