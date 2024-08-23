export default function Register() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form action="" style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "34px", marginBottom: 10 }}>Register</h1>
                <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    style={{ marginBottom: "10px", textAlignLast: "center" }}
                />
                <br />
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
                <input
                    type="password"
                    placeholder="Repeat password"
                    name="Repeat password"
                    style={{ marginTop: "10px", textAlignLast: "center" }}
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
                    Register
                </button>
                <p style={{ marginTop: "10px" }}>
                    Already have an account? Try{" "}
                    <a href="/login" style={{ textDecoration: "underline" }}>
                        Log in
                    </a>
                </p>
            </form>
        </div>
    );
    }