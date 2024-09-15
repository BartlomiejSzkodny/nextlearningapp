"use client"
import { login } from "../lib/cookieslog";
export default function Login() {
function handleSubmi(e: any) {
    login();
}

    

    return (<div>
        
        <div className="registerPage" >
            <form onSubmit={handleSubmi}>
                <h1 style={{ fontSize:"40px",marginBottom:"20px"}}>Log in</h1>
                
                <div>
                    <label>
                    <input type="text" name="email" placeholder="Email" style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                <div>
                    <label>
                    <input type="password" name="password" placeholder="Password"  style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                
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
