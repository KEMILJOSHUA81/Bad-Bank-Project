// import React, { useState, useContext, useEffect } from "react";
// import { UserContext } from "./context";

// function Deposit() {
//     const [depositAmount, setDepositAmount] = useState('');
//     const [depositHistory, setDepositHistory] = useState([]);
//     const [popupMessage, setPopupMessage] = useState(null);
//     const ctx = useContext(UserContext);
//     const activeUser = ctx.activeUser;

//     useEffect(() => {
//         if (activeUser) {
//             const history = JSON.parse(localStorage.getItem(`depositHistory_${activeUser.email}`)) || [];
//             setDepositHistory(history);
//         }
//     }, [activeUser]);

//     function showPopup(message) {
//         setPopupMessage(message);
//         setTimeout(() => setPopupMessage(null), 3000);
//     }

//     function makeDeposit() {
//         const amount = Number(depositAmount);
//         if (!amount || amount <= 0 || amount > 99999) {
//             showPopup("Please enter a valid amount between 1 and 99999.");
//             return;
//         }

//         const updatedBalance = activeUser.balance + amount;
//         const updatedUser = { ...activeUser, balance: updatedBalance };

//         localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
//         ctx.setActiveUser(updatedUser);

//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         const updatedUsers = users.map(user => user.email === activeUser.email ? updatedUser : user);
//         localStorage.setItem("users", JSON.stringify(updatedUsers));

//         const newHistoryEntry = { amount, time: new Date().toLocaleString() };
//         const updatedHistory = [newHistoryEntry, ...depositHistory];
//         localStorage.setItem(`depositHistory_${activeUser.email}`, JSON.stringify(updatedHistory));
//         setDepositHistory(updatedHistory);

//         const allTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
//         allTransactions.push({ email: activeUser.email, type: "Deposit", amount, time: new Date().toLocaleString() });
//         localStorage.setItem("transactions", JSON.stringify(allTransactions));

//         setDepositAmount('');
//         showPopup("Deposit Successful!");
//     }

//     return (
//         <div style={styles.container}>
//             <div style={styles.overlay}></div>
//             <div style={styles.card}>
//                 <h2 style={styles.title}>Deposit</h2>
//                 <p style={styles.balance}>Account Balance: Rs.{activeUser?.balance || 0}</p>


//                 <div>
//                     <p style={styles.label}>Enter Deposit Amount:</p>
//                     <input 
//                         type="number"
//                         placeholder="Enter amount (Max: 99999)"
//                         value={depositAmount}
//                         onChange={e => setDepositAmount(e.target.value.replace(/^0+/, ''))}
//                         style={styles.input}
//                     />
//                     <button onClick={makeDeposit} style={styles.button}>
//                         Deposit
//                     </button>
//                 </div>

//                 <h3 style={styles.historyTitle}>Deposit History</h3>
//                 <div style={styles.historyContainer}>
//                     {depositHistory.length > 0 ? (
//                         depositHistory.map((entry, index) => (
//                             <div key={index} style={styles.historyEntry}>
//                                 <p style={styles.historyAmount}>
//                                     + Rs.{entry.amount.toFixed(2)}
//                                 </p>
//                                 <p style={styles.historyTime}>
//                                     {entry.time}
//                                 </p>
//                             </div>
//                         ))
//                     ) : (
//                         <p style={styles.noHistory}>No deposits yet.</p>
//                     )}
//                 </div>
//             </div>

//             {popupMessage && (
//                 <div style={styles.popup}>
//                     {popupMessage}
//                 </div>
//             )}

//             {/* Footer Positioned at Bottom */}
//             <footer style={styles.footer}>
//                 <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//             </footer>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundImage: `url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//     },
//     overlay: {
//         position: "absolute",
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.4)",
//         backdropFilter: "blur(3px)",
//     },
//     card: {
//         position: "relative",
//         background: "rgba(255, 255, 255, 0.9)",
//         padding: "25px",
//         borderRadius: "12px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//         width: "350px",
//         textAlign: "center",
//         zIndex: 1,
//     },
//     title: {
//         fontSize: "22px",
//         marginBottom: "10px",
//         fontWeight: "bold",
//     },
//     balance: {
//         fontWeight: "bold",
//         fontSize: "18px",
//     },
//     label: {
//         marginBottom: "5px",
//         fontSize: "14px",
//         color: "#666",
//     },
//     input: {
//         width: "100%",
//         padding: "10px",
//         marginBottom: "10px",
//         borderRadius: "6px",
//         border: "1px solid #ccc",
//         textAlign: "center",
//         fontSize: "16px",
//     },
//     button: {
//         backgroundColor: "#007bff",
//         color: "white",
//         padding: "10px",
//         width: "100%",
//         borderRadius: "6px",
//         border: "none",
//         cursor: "pointer",
//         fontSize: "16px",
//         fontWeight: "bold",
//     },
//     historyTitle: {
//         marginTop: "20px",
//         fontSize: "18px",
//     },
//     historyContainer: {
//         maxHeight: "200px",
//         overflowY: "auto",
//         padding: "5px",
//         textAlign: "left",
//     },
//     historyEntry: {
//         padding: "8px",
//         borderBottom: "1px solid #ddd",
//     },
//     historyAmount: {
//         color: "green",
//         fontSize: "16px",
//         margin: "5px 0",
//     },
//     historyTime: {
//         fontSize: "12px",
//         color: "#666",
//     },
//     noHistory: {
//         fontSize: "14px",
//         color: "#888",
//     },
//     popup: {
//         position: "fixed",
//         top: "10px",
//         left: "50%",
//         transform: "translateX(-50%)",
//         background: "#28a745",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "6px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         zIndex: 1000,
//     },
//     footer: {
//         position: "absolute",
//         bottom: "0",
//         width: "100%",
//         textAlign: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//         color: "white",
//         padding: "10px 0",
//     }
// };

// export default Deposit;


// import React, { useState, useContext, useEffect } from "react";
// import { UserContext } from "./context";

// function Deposit() {
//     const [depositAmount, setDepositAmount] = useState('');
//     const [depositHistory, setDepositHistory] = useState([]);
//     const [popupMessage, setPopupMessage] = useState(null);
//     const ctx = useContext(UserContext);

//     const [activeUser, setActiveUser] = useState(() => {
//         let storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
//         if (storedUser) {
//             storedUser.balance = 0; // Reset balance to 0
//             localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
//         } else {
//             storedUser = { email: "", balance: 0 };
//         }
//         return storedUser;
//     });

//     useEffect(() => {
//         if (activeUser.email) {
//             let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//             let existingUser = storedUsers.find(user => user.email === activeUser.email);

//             if (existingUser) {
//                 existingUser.balance = 0; // Reset balance to 0 in users list
//                 setActiveUser(existingUser);
//                 localStorage.setItem("users", JSON.stringify(storedUsers));
//             } else {
//                 const newUser = { email: activeUser.email, balance: 0 };
//                 setActiveUser(newUser);
//                 localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
//             }

//             const history = JSON.parse(localStorage.getItem(`depositHistory_${activeUser.email}`)) || [];
//             setDepositHistory(history);
//         }
//     }, [activeUser.email]);

//     function showPopup(message) {
//         setPopupMessage(message);
//         setTimeout(() => setPopupMessage(null), 3000);
//     }

//     function makeDeposit() {
//         const amount = Number(depositAmount);
//         if (!amount || amount <= 0 || amount > 99999) {
//             showPopup("Please enter a valid amount between 1 and 99999.");
//             return;
//         }

//         const updatedBalance = activeUser.balance + amount;
//         const updatedUser = { ...activeUser, balance: updatedBalance };

//         localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
//         setActiveUser(updatedUser);
//         ctx.setActiveUser(updatedUser);

//         const users = JSON.parse(localStorage.getItem("users")) || [];
//         const updatedUsers = users.map(user => user.email === activeUser.email ? updatedUser : user);
//         localStorage.setItem("users", JSON.stringify(updatedUsers));

//         const newHistoryEntry = { amount, time: new Date().toLocaleString() };
//         const updatedHistory = [newHistoryEntry, ...depositHistory];
//         localStorage.setItem(`depositHistory_${activeUser.email}`, JSON.stringify(updatedHistory));
//         setDepositHistory(updatedHistory);

//         setDepositAmount('');
//         showPopup("Deposit Successful!");
//     }

//     return (
//         <div style={{ padding: "20px", textAlign: "center" }}>
//             <h2>Deposit</h2>
//             <p>Account Balance: Rs.{activeUser.balance}</p>
//             <input 
//                 type="number"
//                 placeholder="Enter amount"
//                 value={depositAmount}
//                 onChange={e => setDepositAmount(e.target.value.replace(/^0+/, ''))}
//             />
//             <button onClick={makeDeposit}>Deposit</button>
//             <h3>Deposit History</h3>
//             <ul>
//                 {depositHistory.length > 0 ? (
//                     depositHistory.map((entry, index) => (
//                         <li key={index}>+ Rs.{entry.amount} on {entry.time}</li>
//                     ))
//                 ) : (
//                     <p>No deposits yet.</p>
//                 )}
//             </ul>
//             {popupMessage && <div>{popupMessage}</div>}
//         </div>
//     );
// }

// export default Deposit;


import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState("");
    const [depositHistory, setDepositHistory] = useState([]);
    const [popupMessage, setPopupMessage] = useState(null);
    const ctx = useContext(UserContext);

    const [activeUser, setActiveUser] = useState(() => {
        let storedUser = JSON.parse(localStorage.getItem("loggedInUser")) || { email: "", balance: 0 };
        return storedUser;
    });

    useEffect(() => {
        if (activeUser.email) {
            let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            let existingUser = storedUsers.find(user => user.email === activeUser.email);

            if (existingUser) {
                setActiveUser(existingUser);
            } else {
                const newUser = { email: activeUser.email, balance: 0 };
                setActiveUser(newUser);
                localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
            }

            const history = JSON.parse(localStorage.getItem(`depositHistory_${activeUser.email}`)) || [];
            setDepositHistory(Array.isArray(history) ? history : []);
        }
    }, [activeUser.email]);

    function showPopup(message) {
        setPopupMessage(message);
        setTimeout(() => setPopupMessage(null), 3000);
    }

    function makeDeposit() {
        const amount = Number(depositAmount);
        if (!amount || amount <= 0 || amount > 99999) {
            showPopup("Please enter a valid amount between 1 and 99999.");
            return;
        }

        const updatedBalance = activeUser.balance + amount;
        const updatedUser = { ...activeUser, balance: updatedBalance };
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        setActiveUser(updatedUser);
        ctx.setActiveUser(updatedUser);

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map(user => user.email === activeUser.email ? updatedUser : user);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const newHistoryEntry = { amount, time: new Date().toLocaleString() };
        const updatedHistory = [newHistoryEntry, ...depositHistory];
        localStorage.setItem(`depositHistory_${activeUser.email}`, JSON.stringify(updatedHistory));
        setDepositHistory(updatedHistory);

        setDepositAmount("");
        showPopup("Deposit Successful!");
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Deposit</h2>
                <p style={styles.balance}>Account Balance: Rs.{activeUser.balance}</p>
                <input
                    type="number"
                    placeholder="Enter amount (Max: 99999)"
                    value={depositAmount}
                    onChange={e => setDepositAmount(e.target.value.replace(/^0+/, ""))}
                    style={styles.input}
                />
                <button onClick={makeDeposit} style={styles.button}>Deposit</button>
                <h3 style={styles.historyTitle}>Deposit History</h3>
                <ul style={styles.historyList}>
                    {depositHistory.length > 0 ? (
                        depositHistory.map((entry, index) => (
                            <li key={index} style={styles.historyItem}>
                                + Rs.{entry.amount} on {entry.time}
                            </li>
                        ))
                    ) : (
                        <p style={styles.noHistory}>No deposits yet.</p>
                    )}
                </ul>
                {popupMessage && <div style={styles.popup}>{popupMessage}</div>}
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
        backgroundImage: `url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
    },
    card: {
        position: "relative",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        width: "350px",
        textAlign: "center",
        zIndex: 1,
    },
    title: {
        fontSize: "22px",
        marginBottom: "10px",
        fontWeight: "bold",
    },
    balance: {
        fontWeight: "bold",
        fontSize: "18px",
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
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px",
        width: "100%",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    },
    historyTitle: {
        marginTop: "20px",
        fontSize: "18px",
    },
    noHistory: {
        fontSize: "14px",
        color: "#888",
    },
    popup: {
        position: "fixed",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#28a745",
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
    }
};

export default Deposit;

