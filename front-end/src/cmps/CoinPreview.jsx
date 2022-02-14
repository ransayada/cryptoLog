import { useState } from "react";

export function CoinPreview({ coin }) {
  const [open, setOpen] = useState(false);

  function onCoinInfo(ev) {
    ev.stopPropagation();
    setOpen(!open);
  }
  return (
    <div className="coin-preview-cmp">
      <h1>{ coin.symbol}</h1>
      <button onClick={onCoinInfo}>Info</button>
      {open ? (
        <h6>
          {"open price: " + coin.openPrice} | {"at: " + coin.openTime} <br/>
          {"last price: " + coin.lastPrice} | {"at: " + coin.closeTime}
        </h6>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default CoinPreview;
