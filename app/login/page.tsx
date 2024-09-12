"use client"
import { useState } from "react";
export default function Login() {



    const [email,setEmail] = useState<string>();
    const [password,setPassword] = useState<string>();


    let [errory, setErrory] = useState<string>();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password,

        };
        
        //setErrory(await RegisterUser(formData));//make here function for login
    }

    return (<div>
        
        <div className="registerPage" >
            <form onSubmit={handleSubmit}>
                <h1 style={{ fontSize:"40px",marginBottom:"20px"}}>Login</h1>
                
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
                
                
                
                
                
                
                <ERROR message={errory} />
                <button type="submit" className="RegisterButton">Login</button>
            </form>
            <div>
                <p style={{ marginTop: "10px", textAlign: "center" }}>
                    No account?{" "}
                    <a href="/register" style={{ textDecoration: "underline" }}>
                        Register
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
