import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typing from "react-typing-effect";
import bank from "./bank.png";
import card1 from "./card1.jpeg";
import card2 from "./card2.jpeg";
import card3 from "./card3.jpeg";
import card4 from "./card4.jpeg";
import card5 from "./card5.jpeg";
import "./Home.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`Home-page ${darkMode ? "dark-mode" : "bright-mode"}`}>
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "Bright Mode" : "Dark Mode"}
      </button>
      
      <h1 className="heading">
        <Typing
          text={["🏦 WELCOME TO OUR BAD BANK!!! 🏦"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          loop={true}
        />
      </h1>

      <div className="gif-container">
        <img src={bank} alt="bank" />
      </div>

      <div className="card-container">
        <div className="card">
          <img src={card1} alt="Card 1" />
          <h3>Secure Transactions</h3>
          <p>
            A secure transaction in banking ensures safe and encrypted financial
            exchanges, protecting users from fraud and unauthorized access.
          </p>
        </div>
        <div className="card">
          <img src={card2} alt="Card 2" />
          <h3>Easy Loans</h3>
          <p>
            Easy loans in a bank provide quick and hassle-free financial
            assistance with minimal documentation and flexible repayment
            options.
          </p>
        </div>
        <div className="card">
          <img src={card3} alt="Card 3" />
          <h3>24/7 Support</h3>
          <p>
            24/7 support in banking ensures customers receive assistance anytime
            for transactions, inquiries, and issue resolution.
          </p>
        </div>
        <div className="card">
          <img src={card4} alt="Card 4" />
          <h3>Mobile Banking</h3>
          <p>
            Mobile banking allows customers to access banking services, perform
            transactions, and manage accounts securely through a mobile app or
            website.
          </p>
        </div>
        <div className="card">
          <img src={card5} alt="Card 5" />
          <h3>Commercial Banks</h3>
          <p>
            Commercial banks are financial institutions that accept deposits,
            provide loans, and offer various banking services to individuals and
            businesses for profit.
          </p>
        </div>
      </div>

      {/* Create Account Button for Navigation */}
      {/* <button className="navigate-btn" onClick={() => navigate("/CreateAccount")}>
        Create Account
      </button> */}

      <footer>
        <p>&copy; 2025, Emil Joshua K, I - M.Sc. Computer Science</p>
      </footer>
    </div>
  );
}
