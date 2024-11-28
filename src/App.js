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
        <span>&rarr;</span>
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
      <button onClick={handleConvert} className="convert-button">
        Đổi tiền
      </button>
      {result && (
        <div className="result">
          Kết quả: <strong>{result}</strong> {currency2}
        </div>
      )}
    </div>
  );
};

export default App;
