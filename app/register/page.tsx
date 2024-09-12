"use client"
import { RegisterUser } from "../lib/action";
import { useState } from "react";
export default function Register() {



    const [username,setUsername] = useState<string>();
    const [email,setEmail] = useState<string>();
    const [password,setPassword] = useState<string>();
    const [repeat,setRepeat] = useState<string>();

    let [errory, setErrory] = useState<string>();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = {
            username: username,
            email: email,
            password: password,
            repeat: repeat

        };
        
        setErrory(await RegisterUser(formData));
    }

    return (<div>
        
        <div className="registerPage" >
            <form onSubmit={handleSubmit}>
                <h1 style={{ fontSize:"40px",marginBottom:"20px"}}>Register</h1>
                <div>
                    <label>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}} />
                </label>
                </div>
                
                <div>
                    <label>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                <div>
                    <label>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                
                <div>
                    <label>
                    <input type="password" name="repeat" placeholder="Repeat password" onChange={(e) => setRepeat(e.target.value)} style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                
                
                
                
                
                <ERROR message={errory} />
                <button type="submit" className="RegisterButton">Register</button>
            </form>
            <div>
                <p style={{ marginTop: "10px", textAlign: "center" }}>
                    Already have a account?{" "}
                    <a href="/login" style={{ textDecoration: "underline" }}>
                        Login
                    </a>
                </p>
            </div>
        </div>
        
    </div>

        
    );
}
function ERROR({message}:{message:any}) {
    if (!message) return null;
    return (
        <div>
            <div className="ErrorPassword">{message}</div>
        </div>
    );
}
