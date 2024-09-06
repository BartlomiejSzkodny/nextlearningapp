
import { RegisterUser } from "../lib/action";
export default function Register() {

    return (
        <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form action={RegisterUser}>
                <h1 style={{ textAlign: "center", fontSize: 28, marginBottom: 20 }}>Register</h1>
                <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    style={{ marginBottom: "10px" ,color: "black"}}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    style={{ marginBottom: "10px" ,color: "black"}}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    style={{ marginBottom: "10px",color: "black" }}
                />
                
                <ERROR message=""  />
                <br />
                
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="Repeatpassword"
                    style={{ marginBottom: "10px",color: "black" }}
                />
                <br />
                
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                        style={{
                            marginTop: "10px",
                            backgroundColor: "blue",
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Register
                    </button>
                </div>
            </form>
            
            <div>
                <p style={{ marginTop: "10px", textAlign: "center" }}>
                    Already have an account?{" "}
                    <a href="/login" style={{ textDecoration: "underline" }}>
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
function ERROR({message}:{message:string}) {
    return (
        <div>
            <div>{message}</div>
        </div>
    );
}
