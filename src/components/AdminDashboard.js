// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import transfer from "./transfer.jpg";

// function AdminDashboard() {
//     const navigate = useNavigate();

//     // Sample user data with balance and gender
//     const [users] = useState([
//         { id: 1, name: "Aakash", email: "aakash@example.com", balance: 5000, gender: "Male" },
//         { id: 2, name: "Saran", email: "saran@example.com", balance: 3000, gender: "Male" },
//         { id: 3, name: "Mathan", email: "mathan@example.com", balance: 4500, gender: "Male" },
//         { id: 4, name: "Priya", email: "priya@example.com", balance: 8000, gender: "Female" },
//         { id: 5, name: "Srinithi", email: "srinithi@example.com", balance: 7000, gender: "Female" },
//         { id: 6, name: "Rahul", email: "rahul@example.com", balance: 2000, gender: "Male" },
//         { id: 7, name: "Mahendran", email: "mahendran@example.com", balance: 2000, gender: "Male" },
//         { id: 8, name: "Guna", email: "guna@example.com", balance: 2000, gender: "Male" },
//         { id: 9, name: "Jeniffer", email: "jeniffer@example.com", balance: 30000, gender: "Female" },
//         { id: 10, name: "Angle", email: "angle@example.com", balance: 50000, gender: "Female" },
//     ]);

//     // Function to handle logout
//     const handleLogout = () => {
//         alert("You have been logged out! Redirecting to Home Page...");
//         navigate("/"); // Use navigate instead of window.location.href
//     };

//     return (
//         <div style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", paddingBottom: "30px" }}>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
//                 <div className="container d-flex justify-content-between align-items-center">
//                     <img src={transfer} alt="Transfer Icon" style={{ width: "120px" }} />
//                     <button 
//                         id="logoutButton" 
//                         className="btn btn-danger px-4 py-2"
//                         onClick={handleLogout}
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </nav>

//             {/* Admin Dashboard Welcome */}
//             <div className="container text-center mt-5">
//                 <h1 className="display-4 fw-bold">Welcome to the Admin Dashboard</h1>
//                 <p className="lead">Manage and transfer funds seamlessly</p>
//             </div>

//             {/* Transfer Money Table */}
//             <div className="container mt-4">
//                 <h2 className="text-center fw-bold">All Data</h2>
//                 <div className="table-responsive">
//                     <table className="table table-hover table-bordered shadow-sm">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th className="text-center">Id/S.No</th>
//                                 <th className="text-center">Name</th>
//                                 <th className="text-center">E-Mail</th>
//                                 <th className="text-center">Gender</th>
//                                 <th className="text-center">Balance</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users.map((user) => (
//                                 <tr key={user.id}>
//                                     <td className="text-center">{user.id}</td>
//                                     <td className="text-center">{user.name}</td>
//                                     <td className="text-center">{user.email}</td>
//                                     <td className="text-center">{user.gender}</td>
//                                     <td className="text-center text-success fw-bold">
//                                         Rs.{user.balance.toFixed(2)}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="text-center mt-4 py-3 bg-light shadow-sm">
//                 <p className="m-0">&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//             </footer>
//         </div>
//     );
// }

// export default AdminDashboard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";  // Import custom CSS for styling

function AdminDashboard() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const usersWithAccountNumbers = storedUsers.map(user => {
            if (!user.id) {
                user.id = generateAccountNumber();
            }
            return {
                ...user,
                balance: Number(user.balance) || 0
            };
        });

        localStorage.setItem("users", JSON.stringify(usersWithAccountNumbers));
        setUsers(usersWithAccountNumbers);
    }, []);

    // function generateAccountNumber() {
    //     return Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
    // }

    function generateAccountNumber() {
        const firstDigit = Math.floor(Math.random() * 9) + 1; // Ensures first digit is 1-9
        const remainingDigits = Math.floor(Math.random() * 10 ** 13).toString().padStart(13, "0"); // 13 digits
        return firstDigit + remainingDigits; // Combine to ensure 14-digit output
    }
    

    function handleLogout() {
        localStorage.removeItem("loggedInUser");
        navigate("/");
    }

    return (
        <div className="admin-dashboard">
            
            {/* Dashboard Header */}
            <div className="dashboard-header">
                <h1>
                    <i className="fas fa-user-shield"></i> Admin Dashboard
                </h1>
                <button onClick={handleLogout} className="logout-btn">
                    <i className="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>

            {/* User Table - Full Screen */}
            <div className="table-container">
                <h3>
                    <i className="fas fa-users"></i> Registered Users/All Data
                </h3>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><i className="fas fa-id-card"></i> Account Number</th>
                                <th><i className="fas fa-user"></i> Name</th>
                                <th><i className="fas fa-envelope"></i> Email</th>
                                <th><i className="fas fa-wallet"></i> Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>Rs. {user.balance.toFixed(2)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No users found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
            </footer>
        </div>
    );
}

export default AdminDashboard;
