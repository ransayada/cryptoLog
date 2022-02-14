import { useState } from "react";
import { convertTimestamp } from "../services/utilsService.js";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";

export function CoinPreview({ coin }) {
  const [open, setOpen] = useState(false);

  function onCoinInfo(ev) {
    ev.stopPropagation();
    setOpen(!open);
  }
  return (
    <div className="coin-preview-cmp">
      <Button className="mui-btn" color="secondary" onClick={onCoinInfo}>
        {coin.symbol}
      </Button>
      {open ? (
        <h6>
          {"open price: " + coin.openPrice} <br />{" "}
          {"at: " + convertTimestamp(coin.openTime)} <br />
          {"last price: " + coin.lastPrice} <br />{" "}
          {"at: " + convertTimestamp(coin.closeTime)}
        </h6>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default CoinPreview;
