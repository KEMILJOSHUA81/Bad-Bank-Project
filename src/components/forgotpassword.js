import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    function handleResetPassword() {
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        let userIndex = storedUsers.findIndex(u => u.email === email);

        if (userIndex !== -1) {
            storedUsers[userIndex].password = newPassword;
            localStorage.setItem("users", JSON.stringify(storedUsers));
            setMessage("✅ Password reset successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
        } else {
            setMessage("❌ Email not found. Please enter a valid email.");
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div style={styles.card}>
                <h2 style={styles.title}>Forgot Password?</h2>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Enter your email to reset your password.</p>
                
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    style={styles.input}
                />
                
                <button onClick={handleResetPassword} style={styles.button}>Reset Password</button>
                {message && <p style={{ color: message.includes("❌") ? "red" : "green", fontSize: "14px", marginTop: "10px" }}>{message}</p>}
            </div>
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
        backgroundImage: `url('https://media.tenor.com/1-RiJPm0eTgAAAAd/bank-cash.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
};

export default ForgotPassword;
