


// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "./context";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for navigation
// import fullb from "./fullb.jpg";

// function AllDataPage() {
//   const ctx = useContext(UserContext);
//   const currentUser = ctx.activeUser;
//   const [transactions, setTransactions] = useState([]);
//   const navigate = useNavigate(); // ✅ Use navigate instead of window.location.href

//   useEffect(() => {
//     if (currentUser) {
//       // Fetch latest user details from localStorage
//       const users = JSON.parse(localStorage.getItem("users")) || [];
//       const updatedUser = users.find(user => user.email === currentUser.email);
      
//       if (updatedUser) {
//         ctx.setActiveUser(updatedUser); // Update the context with the latest balance
//       }
  
//       // Retrieve stored transactions for the logged-in user
//       const allTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
//       const userTransactions = allTransactions.filter(tx => tx.email === currentUser.email);
//       setTransactions(userTransactions);
//     }
//   }, []);

//   // ✅ Fixed Logout Navigation Issue
//   const handleLogout = () => {
//     alert("You have been logged out! Please sign up to log in again.");
//     navigate("/"); // ✅ Navigate properly without refreshing
//   };

//   const animationStyle = `
//     @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(-10px); }
//         to { opacity: 1; transform: translateY(0); }
//     }
//     .fadeIn {
//         animation: fadeIn 1s ease-in-out;
//     }
//     .hoverEffect {
//         transition: all 0.3s ease-in-out;
//         cursor: pointer;
//     }
//     .hoverEffect:hover {
//         transform: scale(1.05);
//         background-color: #111;
//         color: white;
//     }
//   `;

//   return (
//     <div 
//       style={{ 
//         backgroundImage: `url(${fullb})`, 
//         backgroundSize: "cover", 
//         minHeight: "100vh", 
//         padding: "20px",
//         color: "white",
//         fontFamily: "Arial, sans-serif"
//       }}
//     >
//       <style>{animationStyle}</style>

//       {/* Navigation Bar */}
//       <nav 
//         style={{ 
//           display: "flex", 
//           justifyContent: "space-between", 
//           alignItems: "center", 
//           padding: "15px",
//           background: "rgba(0,0,0,0.7)", 
//           borderRadius: "10px"
//         }}
//       >
//         <h2 style={{ margin: 0, fontWeight: "bold", color: "lightgreen" }}>Dashboard</h2>
//         <button 
//           className="btn btn-danger" 
//           onClick={handleLogout} 
//           style={{ fontWeight: "bold" }}
//         >
//           Logout
//         </button>
//       </nav>

//       {/* User Data */}
//       <div className="container mt-5 fadeIn">
//         <h1 className="text-center" style={{ fontWeight: "bold", color: "darkcyan" }}>User Details</h1>
//         <div 
//           className="card mx-auto mt-3 p-4 hoverEffect" 
//           style={{ 
//             maxWidth: "500px", 
//             background: "rgba(0,0,0,0.8)", 
//             borderRadius: "12px", 
//             boxShadow: "0 4px 8px rgba(255,255,255,0.3)",
//             textAlign: "center"
//           }}
//         >
//           {currentUser ? (
//             <>
//               <h3 style={{ color: "#00ff99" }}>{currentUser.name}</h3>
//               <p>Email: <strong>{currentUser.email}</strong></p>
//               <p>Balance: <strong>Rs.{currentUser.balance}</strong></p>
//             </>
//           ) : (
//             <p style={{ color: "red" }}>No user logged in.</p>
//           )}
//         </div>
//       </div>

//       <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
//         <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//       </footer>
//     </div>
//   );
// }

// export default AllDataPage;


import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";
import { useNavigate } from "react-router-dom";
import fullb from "./fullb.jpg";

function AllDataPage() {
  const ctx = useContext(UserContext);
  const currentUser = ctx.activeUser;
  const [transactions, setTransactions] = useState([]);
  const [popupMessage, setPopupMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUser = users.find(user => user.email === currentUser.email);
      if (updatedUser) {
        ctx.setActiveUser(updatedUser);
      }

      const allTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
      const userTransactions = allTransactions.filter(tx => tx.email === currentUser.email);
      setTransactions(userTransactions);
    }
  }, []);

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(null), 3000);
  };

  const handleLogout = () => {
    showPopup("You have been logged out! Redirecting...");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div 
      style={{ 
        backgroundImage: `url(${fullb})`, 
        backgroundSize: "cover", 
        minHeight: "100vh", 
        padding: "20px",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {popupMessage && (
        <div style={{
          position: "fixed",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          zIndex: 1000,
        }}>
          {popupMessage}
        </div>
      )}

      <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "15px",
        background: "rgba(0,0,0,0.7)", 
        borderRadius: "10px"
      }}>
        <h2 style={{ margin: 0, fontWeight: "bold", color: "lightgreen" }}>Dashboard</h2>
        <button 
          className="btn btn-danger" 
          onClick={handleLogout} 
          style={{ fontWeight: "bold" }}
        >
          Logout
        </button>
      </nav>

      <div className="container mt-5">
        <h1 className="text-center" style={{ fontWeight: "bold", color: "darkcyan" }}>User Details</h1>
        <div className="card mx-auto mt-3 p-4" 
          style={{ 
            maxWidth: "500px", 
            background: "rgba(0,0,0,0.8)", 
            borderRadius: "12px", 
            boxShadow: "0 4px 8px rgba(255,255,255,0.3)",
            textAlign: "center"
          }}
        >
          {currentUser ? (
            <>
              <h3 style={{ color: "#00ff99" }}>{currentUser.name}</h3>
              <p>Email: <strong>{currentUser.email}</strong></p>
              <p>Balance: <strong>Rs.{currentUser.balance}</strong></p>
            </>
          ) : (
            <p style={{ color: "red" }}>No user logged in.</p>
          )}
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
        <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
      </footer>
    </div>
  );
}

export default AllDataPage;
