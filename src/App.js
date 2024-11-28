import React, { useState } from "react";
import "./styles.css";

const exchangeRates = {
  USD: 1,
  VNĐ: 25456.3431,
  AED: 3.6725,
  AFN: 68.559,
  ALL: 94.0989,
  EUR: 0.956,
  JPY: 154.2064,
  GBP: 0.7963,
};

const App = () => {
  const [amount, setAmount] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("VNĐ");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    if (amount && currency1 && currency2) {
      const rate1 = exchangeRates[currency1];
      const rate2 = exchangeRates[currency2];
      const converted = (amount / rate1) * rate2;
      setResult(converted.toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1 className="title">Chuyển đổi tiền tệ</h1>
      <div className="converter">
        <input
          type="number"
          placeholder="Nhập số tiền"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
        />
        <select
          value={currency1}
          onChange={(e) => setCurrency1(e.target.value)}
          className="dropdown"
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="swap-icon" onClick={handleConvert}>
          
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
            width="24"
            height="24"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <polyline
                id="primary"
                points="20 10 4 10 7 7"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></polyline>
              <polyline
                id="primary-2"
                data-name="primary"
                points="4 14 20 14 17 17"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                }}
              ></polyline>
            </g>
          </svg>
        </span>
        <select
          value={currency2}
          onChange={(e) => setCurrency2(e.target.value)}
          className="dropdown"
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        {result && (
          <p>
            Kết quả: {result} {currency2}
          </p>
        )}
      </div>
      <footer class="footer">
        <div class="footer-left">
          <h3>
            ChuyenDoi<span>TienTe</span>
          </h3>
          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>
          </p>
          <p class="footer-company-name">Copyright © 2024</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Vietnam</span> Tp. Ho Chi Minh
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+84 9813699**</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">nductrung.021@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
