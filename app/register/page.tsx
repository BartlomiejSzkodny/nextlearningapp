export default function Register() {
    return (
        <div style={{  display: "flex", flexDirection: "column", alignItems: "center" }}>
            <form action="">
                <h1 style={{ textAlign: "center", fontSize: 28, marginBottom: 20 }}>Register page</h1>
                <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    style={{ marginBottom: "10px" }}
                />
                <br />
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
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="Repeat password"
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