export default function Register() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form action="">
                <h1 style={{ textAlign: "center" }}>Register page</h1>
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
                <button
                    style={{
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
            </form>
        </div>
    );
    }