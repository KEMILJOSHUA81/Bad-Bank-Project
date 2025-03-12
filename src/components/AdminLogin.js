// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminLogin() {
//     const [adminEmail, setAdminEmail] = useState('');
//     const [adminPassword, setAdminPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const ADMIN_CREDENTIALS = {
//         email: "admin@badbank.com",
//         password: "admin123"
//     };

//     function handleAdminLogin() {
//         if (adminEmail === ADMIN_CREDENTIALS.email && adminPassword === ADMIN_CREDENTIALS.password) {
//             setMessage("Login successful! Redirecting...");

//             // Delay navigation to show success message
//             setTimeout(() => {
//                 navigate('/admin-dashboard'); // Ensure it's called only once
//             }, 1000); 
//         } else {
//             setMessage("Invalid admin credentials. Please try again.");
//         }
//     }

//     return (
//         <div style={{ 
//             display: "flex", 
//             flexDirection: "column",
//             justifyContent: "center", 
//             alignItems: "center", 
//             minHeight: "100vh", 
//             backgroundColor: "#f4f4f4", 
//             position: "relative",
//             paddingBottom: "50px" // To ensure footer visibility
//         }}>
//             <div style={{ 
//                 width: "350px", 
//                 padding: "20px", 
//                 borderRadius: "10px", 
//                 backgroundColor: "#fff", 
//                 boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                 textAlign: "center"
//             }}>
//                 <h2 style={{ marginBottom: "15px" }}>Admin Login</h2>
                
//                 <input 
//                     type="email" 
//                     placeholder="Admin Email" 
//                     value={adminEmail} 
//                     onChange={(e) => setAdminEmail(e.target.value)} 
//                     style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }}
//                     aria-label="Admin Email"
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Admin Password" 
//                     value={adminPassword} 
//                     onChange={(e) => setAdminPassword(e.target.value)} 
//                     style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }}
//                     aria-label="Admin Password"
//                 />
//                 <button 
//                     onClick={handleAdminLogin} 
//                     style={{ width: "100%", padding: "10px", backgroundColor: "blue", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//                     Login
//                 </button>

//                 {message && (
//                     <p style={{ 
//                         color: message.includes("successful") ? "green" : "red", 
//                         marginTop: "10px", 
//                         fontWeight: "bold"
//                     }}>
//                         {message}
//                     </p>
//                 )}
//             </div>

//             {/* Footer fixed at the bottom */}
//             <footer style={{ 
//                 position: 'absolute', 
//                 bottom: '0', 
//                 width: '100%', 
//                 textAlign: 'center', 
//                 background: 'rgba(0, 0, 0, 0.7)', 
//                 color: 'white', 
//                 padding: '10px',
//                 fontSize: '14px'
//             }}>
//                 <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//             </footer>
//         </div>
//     );
// }

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const ADMIN_CREDENTIALS = {
        email: "admin@badbank.com",
        password: "admin@123"
    };

    function handleAdminLogin() {
        if (adminEmail === ADMIN_CREDENTIALS.email && adminPassword === ADMIN_CREDENTIALS.password) {
            setMessage("Login successful! Redirecting...");

            // Delay navigation to show success message
            setTimeout(() => {
                navigate('/admin-dashboard');
            }, 1000);
        } else {
            setMessage("Invalid admin credentials. Please try again.");
        }
    }

    return (
        <div className="admin-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <input 
                    type="email" 
                    placeholder="Admin Email" 
                    value={adminEmail} 
                    onChange={(e) => setAdminEmail(e.target.value)} 
                    className="input-field"
                />
                <input 
                    type="password" 
                    placeholder="Admin Password" 
                    value={adminPassword} 
                    onChange={(e) => setAdminPassword(e.target.value)} 
                    className="input-field"
                />
                <button onClick={handleAdminLogin} className="login-button">
                    Login
                </button>

                {message && (
                    <p className={`message ${message.includes("successful") ? "success" : "error"}`}>
                        {message}
                    </p>
                )}
            </div>

            <footer className="footer">
                <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
            </footer>
        </div>
    );
}

export default AdminLogin;
