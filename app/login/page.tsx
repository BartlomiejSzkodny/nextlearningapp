'use server'
import {cookies} from "next/headers";

export default function Login() {
    return (<div>
        <div className="loginPage" >
            <form>
                <h1 style={{ fontSize:"40px",marginBottom:"20px"}}>Login</h1>
                <div>
                    <label>
                    <input type="text" name="username" placeholder="Username" style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}} />
                </label>
                </div>
                
                <div>
                    <label>
                    <input type="password" name="password" placeholder="Password" style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}/>
                </label>
                </div>
                
                <div>
                    <button type="submit" style={{ marginBottom: "5px",marginTop:"5px" ,color: "black"}}>Login</button>
                </div>
            </form>
        </div>
    </div>);
}