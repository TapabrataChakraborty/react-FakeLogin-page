import {useState} from "react";
import "./login.css"
export default function Login(){
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const [password,setPassword]=useState("");
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email === "abc@com" && password === "abc"){
            setError("")
            setIsLoggedIn(true);
        }else{
            setError("Invalid email or password");
            setIsLoggedIn(false)
        }
    };
    return(
        <div className="login">
        {isLoggedIn ? (<p className="welcome">Welcome</p>) : (
            <form onSubmit={handleLogin}>
            <input
                placeholder="Enter Email"
                className="emailIn"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                placeholder="Enter Password"
                className="passIn"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="login-button" type="submit">login</button>
            </form>
        )}
        <p className="error">{error}</p>
        </div>
    )
}