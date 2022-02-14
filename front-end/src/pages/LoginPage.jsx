import React from "react";
import { useState } from "react";

export function LoginPage({ coins, Login, sendError }) {
  const [detail, setDetail] = useState({ symbol: "" });

  const check = (coins) => {
    var pos = coins.filter((coin) => coin.priceChange >= 0);
    var flag = pos.filter((coin) => coin.symbol === detail.symbol);
    return flag.length > 0;
  };

  const submitHandler = (e) => {
    e.preventDefault(); //prevent rerender
    if (detail.symbol === "" || !check(coins)) {
      sendError();
    } else {
      Login(detail);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <h2>Login Page</h2>
        {/*ERORR*/}
        <div className="input-container">
          <label htmlFor="symbol">Coin Symbol: </label>
          <input
            type="text"
            name="sym"
            id="sym"
            required
            onChange={(e) => setDetail({ ...detail, symbol: e.target.value })}
            value={detail.symbol}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </div>
    </form>
  );
}
export default LoginPage;
