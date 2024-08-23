export default function Login() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form action="" style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "34px", marginBottom: 10 }}>Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    style={{marginTop: "10px", textAlignLast: "center" }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    style={{ marginTop: "10px" , textAlignLast: "center" }}
                />
                <br />
                
                <button
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "20px",
                    }}
                >
                    Login
                </button>
                <p style={{ marginTop: "10px" }}>
                    No account? {" "}
                    <a href="/register" style={{ textDecoration: "underline" }}>
                        Register
                    </a>
                </p>
            </form>
        </div>
    );
    }