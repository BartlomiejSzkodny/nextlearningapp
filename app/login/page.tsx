export default function Login() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form action="">
                <h1 style={{ textAlign: "center", fontSize: 28, marginBottom: 20 }}>Register page</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    style={{ marginBottom: "10px" }}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    style={{ marginBottom: "10px" }}
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
                        Login
                    </button>
                </div>
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
    );
}
