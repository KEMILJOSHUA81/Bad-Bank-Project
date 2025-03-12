// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "./context";
// import "bootstrap/dist/css/bootstrap.min.css";

// function CreateAccount() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [dob, setDob] = useState('');
//     const [popupMessage, setPopupMessage] = useState(null);
//     const ctx = useContext(UserContext);
//     const navigate = useNavigate();

//     function showPopup(message) {
//         setPopupMessage(message);
//         setTimeout(() => setPopupMessage(null), 3000);
//     }

//     function validate(field, label) {
//         if (!field) {
//             showPopup(`❌ ${label} is required!`);
//             return false;
//         }

//         if (label === "Name" && /\d/.test(field)) {
//             showPopup("❌ Name cannot contain numbers.");
//             return false;
//         }

//         if (label === "Email") {
//             const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//             if (!email.match(emailFormat)) {
//                 showPopup("❌ Enter a valid email address.");
//                 return false;
//             }

//             const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//             if (existingUsers.some(user => user.email === email)) {
//                 showPopup("❌ This email is already registered.");
//                 return false;
//             }
//         }

//         if (label === "Phone" && !/^\d{10}$/.test(field)) {
//             showPopup("❌ Phone number must be exactly 10 digits.");
//             return false;
//         }

//         if (label === "Password") {
//             const passwordFormat = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
//             if (!password.match(passwordFormat)) {
//                 showPopup("❌ Password must be at least 6 characters, contain one uppercase letter, and one special character.");
//                 return false;
//             }
//         }

//         return true;
//     }

//     function handleCreate() {
//         if (!validate(name, "Name") || !validate(email, "Email") || !validate(password, "Password") || !validate(phone, "Phone") || !validate(dob, "Date of Birth")) return;

//         const newUser = { name, email, password, phone, dob, balance: 0 };
//         const updatedUsers = [...ctx.users, newUser];

//         localStorage.setItem("users", JSON.stringify(updatedUsers));
//         ctx.setUsers(updatedUsers);

//         showPopup("✅ Account created successfully! Redirecting to login...");
//         setTimeout(() => navigate('/login'), 2000);
//     }

//     return (
//         <div className="container-fluid d-flex justify-content-center align-items-center vh-100 position-relative" style={{
//             backgroundImage: "url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')",
//             backgroundSize: "cover",
//             backgroundPosition: "center"
//         }}>
//             {/* Transparent Overlay */}
//             <div className="position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(5px)" }}></div>

//             {/* Form Card */}
//             <div className="card p-4 shadow-lg rounded text-center text-white position-relative" style={{ background: "rgba(255, 255, 255, 0.2)", maxWidth: "400px" }}>
//                 <h2 className="fw-bold mb-3">Create Account</h2>
//                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="mb-3 rounded-circle" style={{ width: "80px" }} />

//                 {/* Error Message Inside the Form */}
//                 {popupMessage && (
//                     <div className="alert alert-danger text-center fw-bold p-2 mb-3 rounded" style={{ fontSize: "14px" }}>
//                         {popupMessage}
//                     </div>
//                 )}

//                 <input type="text" className="form-control mb-2" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value.replace(/\d/g, ''))} />
//                 <input type="email" className="form-control mb-2" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
//                 <input type="text" className="form-control mb-2" placeholder="Enter Phone Number" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} />
//                 <input type="date" className="form-control mb-2" value={dob} onChange={e => setDob(e.target.value)} max="2010-12-31" />
//                 <input type="password" className="form-control mb-3" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />

//                 <button onClick={handleCreate} className="btn btn-success fw-bold">Create Account</button>
//             </div>
//             <footer style={{ textAlign: "center", padding: "10px", marginTop: "700px" }}>
//         <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//       </footer>
//         </div>
//     );
// }

// export default CreateAccount;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [popupMessage, setPopupMessage] = useState(null);
    const navigate = useNavigate();

    function showPopup(message) {
        setPopupMessage(message);
        setTimeout(() => setPopupMessage(null), 3000);
    }

    function validate(field, label) {
        if (!field) {
            showPopup(`❌ ${label} is required!`);
            return false;
        }

        if (label === "Name" && /\d/.test(field)) {
            showPopup("❌ Name cannot contain numbers.");
            return false;
        }

        if (label === "Email") {
            const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!email.match(emailFormat)) {
                showPopup("❌ Enter a valid email address.");
                return false;
            }

            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            if (existingUsers.some(user => user.email === email)) {
                showPopup("❌ This email is already registered.");
                return false;
            }
        }

        if (label === "Phone" && !/^\d{10}$/.test(field)) {
            showPopup("❌ Phone number must be exactly 10 digits.");
            return false;
        }

        if (label === "Password") {
            const passwordFormat = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
            if (!password.match(passwordFormat)) {
                showPopup("❌ Password must be at least 6 characters, contain one uppercase letter, and one special character.");
                return false;
            }
        }

        return true;
    }

    function handleCreate() {
        if (!validate(name, "Name") || !validate(email, "Email") || !validate(password, "Password") || !validate(phone, "Phone") || !validate(dob, "Date of Birth")) return;

        const newUser = { id: Date.now(), name, email, password, phone, dob, balance: 1000, gender: "Not Specified" };
        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        showPopup("✅ Account created successfully! Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000);
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <h2 className="fw-bold">Create Account</h2>
            {popupMessage && <div className="alert alert-danger">{popupMessage}</div>}

            <input type="text" className="form-control mb-2" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value.replace(/\d/g, ''))} />
            <input type="email" className="form-control mb-2" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" className="form-control mb-2" placeholder="Enter Phone" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} />
            <input type="date" className="form-control mb-2" value={dob} onChange={e => setDob(e.target.value)} max="2010-12-31" />
            <input type="password" className="form-control mb-3" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />

            <button onClick={handleCreate} className="btn btn-success fw-bold">Create Account</button>
        </div>
    );
}

export default CreateAccount;
