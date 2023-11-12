import React, { useState } from 'react';
const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form>
            <h1>username is : {username}</h1>
            <h1>Password is : {password}</h1>
            <input type="text"
                value={username}
                onChange={(e)=> {setUsername(e.target.value)}}/>
                <input type="password"
                    value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
        </form>
    )
}