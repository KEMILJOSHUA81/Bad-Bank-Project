// import React, { useState, useContext, useEffect } from "react";
// import { UserContext } from "./context";

// function Withdraw() {
//     const [withdrawAmount, setWithdrawAmount] = useState('');
//     const [message, setMessage] = useState({ text: "", type: "" });
//     const [transactionHistory, setTransactionHistory] = useState([]);
//     const ctx = useContext(UserContext);
//     const activeUser = ctx.activeUser;

//     useEffect(() => {
//         const storedTransactions = JSON.parse(localStorage.getItem("withdrawHistory")) || [];
//         setTransactionHistory(storedTransactions);
//     }, []);

//     function makeWithdraw() {
//         if (!activeUser) {
//             setMessage({ text: "Please log in to make a withdrawal.", type: "error" });
//             return;
//         }

//         if (!withdrawAmount || withdrawAmount <= 0) {
//             setMessage({ text: "Please enter a valid withdrawal amount.", type: "error" });
//             return;
//         }

//         if (withdrawAmount > 99999) {
//             setMessage({ text: "Withdrawal amount cannot exceed Rs.99,999.", type: "error" });
//             return;
//         }

//         if (withdrawAmount > activeUser.balance) {
//             setMessage({ text: "Insufficient balance!", type: "error" });
//             return;
//         }

//         const updatedBalance = activeUser.balance - withdrawAmount;
//         ctx.setActiveUser({ ...activeUser, balance: updatedBalance });

//         const newTransaction = { amount: withdrawAmount, timestamp: new Date().toISOString() };
//         const updatedHistory = [...transactionHistory, newTransaction];
//         setTransactionHistory(updatedHistory);
//         localStorage.setItem("withdrawHistory", JSON.stringify(updatedHistory));

//         setMessage({ text: "Withdrawal Successful! Your balance is updated.", type: "success" });
//         setWithdrawAmount('');
//     }

//     return (
//         <div 
//             className="withdraw-container"
//             style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 minHeight: "100vh",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 padding: "20px",
//                 backgroundImage: `url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')`
//             }}
//         >
//             <div 
//                 className="withdraw-box fadeIn"
//                 style={{
//                     width: "450px",
//                     padding: "25px",
//                     borderRadius: "15px",
//                     background: "rgba(255, 255, 255, 0.15)",
//                     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//                     backdropFilter: "blur(10px)",
//                     textAlign: "center",
//                     color: "black",
//                     fontFamily: "Arial, sans-serif",
//                     flexGrow: 1
//                 }}
//             >
//                 <h2 style={{ color: "black", fontSize: "26px", fontWeight: "bold" }}>Withdraw</h2>
//                 <p style={{ fontSize: "18px" }}>
//                     <strong>Account Balance:</strong> Rs.{activeUser ? activeUser.balance : "0"}
//                 </p>

//                 <label htmlFor="withdraw" style={{ fontSize: "16px", display: "block", marginBottom: "5px" }}>
//                     Enter Withdrawal Amount:
//                 </label>
//                 <input
//                     type="number"
//                     className="form-control"
//                     id="withdraw"
//                     placeholder="Enter amount (Max: 99999)"
//                     value={withdrawAmount}
//                     onChange={(e) => {
//                         const value = e.target.value;
//                         if (/^\d{0,5}$/.test(value)) {
//                             setWithdrawAmount(value ? Number(value) : '');
//                         }
//                     }}
//                     style={{
//                         padding: "10px",
//                         borderRadius: "8px",
//                         border: "none",
//                         width: "100%",
//                         textAlign: "center",
//                         fontSize: "16px",
//                         marginBottom: "15px",
//                     }}
//                 />

//                 {withdrawAmount > 0 && (
//                     <p style={{ color: "#ff6666", fontWeight: "bold", marginBottom: "10px" }}>
//                         You will withdraw: Rs.{withdrawAmount}
//                     </p>
//                 )}

//                 {message.text && (
//                     <p
//                         style={{
//                             color: message.type === "error" ? "red" : "#00ff99",
//                             fontWeight: "bold",
//                             fontSize: "14px",
//                             marginBottom: "10px",
//                         }}
//                     >
//                         {message.text}
//                     </p>
//                 )}

//                 <button
//                     type="submit"
//                     className="btn buttonHover"
//                     onClick={makeWithdraw}
//                     disabled={!withdrawAmount || withdrawAmount <= 0 || withdrawAmount > 99999}
//                     style={{
//                         backgroundColor: "#b30000",
//                         color: "black",
//                         border: "none",
//                         padding: "12px 20px",
//                         cursor: "pointer",
//                         fontSize: "16px",
//                         borderRadius: "8px",
//                         transition: "all 0.3s ease-in-out",
//                     }}
//                 >
//                     Withdraw
//                 </button>

//                 {transactionHistory.length > 0 && (
//                     <div
//                         className="transaction-history mt-4"
//                         style={{
//                             background: "rgba(255, 255, 255, 0.2)",
//                             padding: "15px",
//                             borderRadius: "10px",
//                             marginTop: "20px",
//                         }}
//                     >
//                         <h4 style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Withdrawal History</h4>
//                         <ul style={{ listStyle: "none", padding: 0 }}>
//                             {transactionHistory.slice(-3).reverse().map((transaction, index) => (
//                                 <li key={index} style={{ fontSize: "14px", marginBottom: "5px" }}>
//                                     - Rs.{Number(transaction.amount).toFixed(2)} 
//                                     <br />
//                                     <span style={{ fontSize: "12px", color: "#ddd" }}>
//                                         {new Date(transaction.timestamp).toLocaleString()}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>

//             {/* Footer */}
//             <footer
//                 style={{
//                     textAlign: "center",
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "rgba(0, 0, 0, 0.8)",
//                     color: "white",
//                     marginTop: "20px"
//                 }}
//             >
//                 <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
//             </footer>
//         </div>
//     );
// }

// export default Withdraw;



import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [message, setMessage] = useState({ text: "", type: "" });
    const [transactionHistory, setTransactionHistory] = useState([]);
    const ctx = useContext(UserContext);
    const activeUser = ctx.activeUser;

    useEffect(() => {
        if (activeUser) {
            const storedTransactions = JSON.parse(localStorage.getItem(`withdrawHistory_${activeUser.email}`)) || [];
            setTransactionHistory(storedTransactions);
        }
    }, [activeUser]);

    function makeWithdraw() {
        if (!activeUser) {
            setMessage({ text: "Please log in to make a withdrawal.", type: "error" });
            return;
        }

        if (!withdrawAmount || withdrawAmount <= 0 || isNaN(withdrawAmount)) {
            setMessage({ text: "Please enter a valid withdrawal amount.", type: "error" });
            return;
        }

        if (withdrawAmount > 99999) {
            setMessage({ text: "Withdrawal amount cannot exceed Rs.99,999.", type: "error" });
            return;
        }

        if (withdrawAmount > activeUser.balance) {
            setMessage({ text: "Insufficient balance!", type: "error" });
            return;
        }

        const updatedBalance = activeUser.balance - withdrawAmount;
        const updatedUser = { ...activeUser, balance: updatedBalance };
        ctx.setActiveUser(updatedUser);

        // Update users in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map(user => user.email === activeUser.email ? updatedUser : user);
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Store withdrawal transaction
        const newTransaction = { email: activeUser.email, amount: withdrawAmount, timestamp: new Date().toISOString() };
        const updatedHistory = [...transactionHistory, newTransaction];
        setTransactionHistory(updatedHistory);
        localStorage.setItem(`withdrawHistory_${activeUser.email}`, JSON.stringify(updatedHistory));

        setMessage({ text: "Withdrawal Successful! Your balance is updated.", type: "success" });
        setWithdrawAmount('');
    }

    return (
        <div className="withdraw-container" style={styles.container}>
            <div className="withdraw-box fadeIn" style={styles.box}>
                <h2 style={styles.heading}>Withdraw</h2>
                <p style={styles.balance}><strong>Account Balance:</strong> Rs.{activeUser ? activeUser.balance : "0"}</p>
                
                <label htmlFor="withdraw" style={styles.label}>Enter Withdrawal Amount:</label>
                <input
                    type="number"
                    className="form-control"
                    id="withdraw"
                    placeholder="Enter amount (Max: 99999)"
                    value={withdrawAmount}
                    onChange={(e) => {
                        const value = e.target.value.replace(/^0+/, '');
                        if (/^\d{0,5}$/.test(value)) {
                            setWithdrawAmount(value ? Number(value) : '');
                        }
                    }}
                    style={styles.input}
                />

                {withdrawAmount > 0 && (
                    <p style={styles.preview}>You will withdraw: Rs.{withdrawAmount}</p>
                )}

                {message.text && (
                    <p style={{ ...styles.message, color: message.type === "error" ? "red" : "#00ff99" }}>
                        {message.text}
                    </p>
                )}

                <button
                    type="submit"
                    className="btn buttonHover"
                    onClick={makeWithdraw}
                    disabled={!withdrawAmount || withdrawAmount <= 0 || withdrawAmount > 99999}
                    style={styles.button}
                >
                    Withdraw
                </button>

                {transactionHistory.length > 0 && (
                    <div className="transaction-history mt-4" style={styles.historyContainer}>
                        <h4 style={styles.historyHeading}>Withdrawal History</h4>
                        <ul style={styles.historyList}>
                            {transactionHistory.slice(-3).reverse().map((transaction, index) => (
                                <li key={index} style={styles.historyItem}>
                                    - Rs.{Number(transaction.amount).toFixed(2)}
                                    <br />
                                    <span style={styles.timestamp}>{new Date(transaction.timestamp).toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        backgroundImage: "url('https://media.tenor.com/S-TdSjRmKYcAAAAj/piggy-bank-crypto.gif')"
    },
    box: {
        width: "450px",
        padding: "25px",
        borderRadius: "15px",
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        color: "black",
        fontFamily: "Arial, sans-serif",
    },
    heading: { color: "black", fontSize: "26px", fontWeight: "bold" },
    balance: { fontSize: "18px" },
    label: { fontSize: "16px", display: "block", marginBottom: "5px" },
    input: {
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        width: "100%",
        textAlign: "center",
        fontSize: "16px",
        marginBottom: "15px",
    },
    preview: { color: "#ff6666", fontWeight: "bold", marginBottom: "10px" },
    message: { fontWeight: "bold", fontSize: "14px", marginBottom: "10px" },
    button: {
        backgroundColor: "#b30000",
        color: "black",
        border: "none",
        padding: "12px 20px",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "8px",
        transition: "all 0.3s ease-in-out",
    },
    historyContainer: {
        background: "rgba(255, 255, 255, 0.2)",
        padding: "15px",
        borderRadius: "10px",
        marginTop: "20px",
    },
    historyHeading: { color: "black", fontSize: "20px", fontWeight: "bold" },
    historyList: { listStyle: "none", padding: 0 },
    historyItem: { fontSize: "14px", marginBottom: "5px" },
    timestamp: { fontSize: "12px", color: "#ddd" },
    footer: {
        textAlign: "center",
        width: "100%",
        padding: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        marginTop: "20px"
    }
};

export default Withdraw;
