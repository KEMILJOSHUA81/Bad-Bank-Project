// import React, { useContext } from "react";
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from "./context";
// import "./navbar.css";

// function NavBar() {
//     const ctx = useContext(UserContext);
//     const navigate = useNavigate();

//     function handleClick() {
//         navigate('/');
//         ctx.setActiveUser(null);
//     }

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark glowing-navbar">
//                 <a className="navbar-brand px-3 glowing-text" href="#" data-toggle="tooltip" data-placement="bottom" title="Visit our homepage">Bad Bank</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                     <div className="navbar-nav mr-auto">
//                         {ctx.activeUser ? (
//                             <>
//                                 <a className="nav-item nav-link px-3" href="#/deposit" data-toggle="tooltip" data-placement="bottom" title="Make a deposit">Deposit</a>
//                                 <a className="nav-item nav-link px-3" href="#/withdraw" data-toggle="tooltip" data-placement="bottom" title="Make a withdraw">Withdraw</a>
//                                 <a className="nav-item nav-link px-3" href="#/allData" data-toggle="tooltip" data-placement="bottom" title="View data for all users">AllData</a>
//                             </>
//                         ) : (
//                             <>
//                                 <a className="nav-item nav-link px-3" href="#/CreateAccount" data-toggle="tooltip" data-placement="bottom" title="Create a new account">Create Account</a>
//                                 <a className="nav-item nav-link px-3" href="#/login" data-toggle="tooltip" data-placement="bottom" title="Access your account">Login</a>
//                                 <a className="nav-item nav-link px-3" href="#/admin-login" data-toggle="tooltip" data-placement="bottom" title="Admin login">Admin</a>
//                             </>
//                         )}
//                     </div>
//                     <div className="ml-auto">
//                         {ctx.activeUser && (
//                             <button type="submit" className="btn btn-outline-info btn-sm logout-btn" onClick={handleClick}>LogOut</button>
//                         )}
//                     </div>
//                 </div>
//             </nav>
            
//         </div>
//     );
// }

// export default NavBar;


import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "./context";
import "./navbar.css";

function NavBar() {
    const ctx = useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout() {
        ctx.setActiveUser(null);
        navigate("/");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark glowing-navbar">
            <span className="navbar-brand px-3 glowing-text" data-toggle="tooltip" data-placement="bottom" title="Visit our homepage">
                Bad Bank
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto">
                    {ctx.activeUser ? (
                        <>
                            <NavLink className="nav-item nav-link px-3" to="/deposit" data-toggle="tooltip" data-placement="bottom" title="Make a deposit">Deposit</NavLink>
                            <NavLink className="nav-item nav-link px-3" to="/withdraw" data-toggle="tooltip" data-placement="bottom" title="Make a withdrawal">Withdraw</NavLink>
                            <NavLink className="nav-item nav-link px-3" to="/transactionhistory" data-toggle="tooltip" data-placement="bottom" title="View data for all users">Transaction History</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className="nav-item nav-link px-3" to="/CreateAccount" data-toggle="tooltip" data-placement="bottom" title="Create a new account">Create Account</NavLink>
                            <NavLink className="nav-item nav-link px-3" to="/login" data-toggle="tooltip" data-placement="bottom" title="Access your account">Login</NavLink>
                            <NavLink className="nav-item nav-link px-3" to="/admin-login" data-toggle="tooltip" data-placement="bottom" title="Admin login">Admin</NavLink>
                        </>
                    )}
                </div>
                <div className="ml-auto">
                    {ctx.activeUser && (
                        <button type="button" className="btn btn-outline-info btn-sm logout-btn" onClick={handleLogout}>
                            Log Out
                        </button>
                    )}
                </div>
            </div>
                {/* <footer style={{ textAlign: "center", padding: "10px", marginTop: "20px" }}>
            <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
        </footer> */}
        </nav>
    );
}

export default NavBar;

