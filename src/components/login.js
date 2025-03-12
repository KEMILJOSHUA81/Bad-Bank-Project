// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "./context";
// import user from "./user.jpg"

// function Login() {
//     const [loginEmail, setLoginEmail] = useState('');
//     const [loginPassword, setLoginPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const ctx = useContext(UserContext);
//     const navigate = useNavigate();

//     function handleLogin() {
//         const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//         let user = storedUsers.find(u => u.email === loginEmail && u.password === loginPassword);

//         if (user) {
//             localStorage.setItem("loggedInUser", JSON.stringify(user));
//             ctx.setActiveUser(user);
//             setMessage("✅ Login successful! Redirecting...");
//             setTimeout(() => navigate("/deposit"), 2000);
//         } else {
//             setMessage("❌ Invalid credentials. Please try again.");
//         }
//     }

//     return (
//         <div style={containerStyle}>
//             <div style={cardStyle}>
//                 <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>Welcome Back! 👋</h2>
//                 <img src={user} alt="User" style={{ width: "100px", borderRadius: "50%", marginBottom: "10px", backgrountImage:`url(${user})` }} />

//                 <input 
//                     type="email" 
//                     placeholder="Enter email" 
//                     value={loginEmail} 
//                     onChange={e => setLoginEmail(e.target.value)} 
//                     style={inputStyle}
//                 /><br />

//                 <input 
//                     type="password" 
//                     placeholder="Enter password" 
//                     value={loginPassword} 
//                     onChange={e => setLoginPassword(e.target.value)} 
//                     style={inputStyle}
//                 /><br />

//                 <button 
//                     onClick={handleLogin} 
//                     style={buttonStyle}
//                 >
//                     Login
//                 </button>

//                 {message && <p style={{ color: message.includes("❌") ? "red" : "green", fontSize: "14px", marginTop: "10px" }}>{message}</p>}
//             </div>
//         </div>
//     );
// }

// const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4"
// };

// const cardStyle = {
//     background: "white",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     width: "350px",
//     textAlign: "center"
// };

// const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc"
// };

// const buttonStyle = {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "10px",
//     width: "100%",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px"
// };

// export default Login;


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context";
import user from "./user.jpg";


function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [message, setMessage] = useState('');
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogin() {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        let user = storedUsers.find(u => u.email === loginEmail && u.password === loginPassword);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            ctx.setActiveUser(user);
            setMessage("✅ Login successful! Redirecting...");
            setTimeout(() => navigate("/deposit"), 2000);
        } else {
            setMessage("❌ Invalid credentials. Please try again.");
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div> {/* Overlay for readability */}
            <div style={styles.card}>
                <h2 style={styles.title}>Welcome Back to Bad Bank! 👋</h2>
                <img src={user} alt="User" style={styles.avatar} />

                <input 
                    type="email" 
                    placeholder="Enter email" 
                    value={loginEmail} 
                    onChange={e => setLoginEmail(e.target.value)} 
                    style={styles.input}
                />

                <input 
                    type="password" 
                    placeholder="Enter password" 
                    value={loginPassword} 
                    onChange={e => setLoginPassword(e.target.value)} 
                    style={styles.input}
                />

                <button onClick={handleLogin} style={styles.button}>
                    Login
                </button>

                <p style={{ marginTop: "10px" }}>
    <span 
        style={{ color: "orangered", textDecoration: "underline", cursor: "pointer" }} 
        onClick={() => navigate("/forgotpassword")}
    >
        Forgot Password?
    </span>
</p>

                {message && <p style={{ color: message.includes("❌") ? "red" : "green", fontSize: "14px", marginTop: "10px" }}>{message}</p>}
            </div>

            {/* Footer Positioned at Bottom */}
            <footer style={styles.footer}>
                <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
            </footer>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('https://media.tenor.com/1-RiJPm0eTgAAAAd/bank-cash.gif')`, // Super Bank GIF
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
        backdropFilter: "blur(3px)",
    },
    card: {
        position: "relative",
        background: "rgba(255, 255, 255, 0.2)",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        width: "350px",
        textAlign: "center",
        color: "white",
        zIndex: 1,
    },
    title: {
        fontSize: "22px",
        marginBottom: "10px",
        fontWeight: "bold",
    },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginBottom: "10px",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        textAlign: "center",
        fontSize: "16px",
    },
    button: {
        backgroundColor: "#ff6600",
        color: "white",
        padding: "12px",
        width: "100%",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "all 0.3s ease",
    },
    footer: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "10px 0",
    }
};

export default Login;
