import { CoinPreview } from "../cmps/CoinPreview.jsx";
import Button from '@mui/material/Button';

export function HomePage({ Logout, coins }) {
  function onLogout(ev) {
    ev.preventDefault(); //prevent rerender
    Logout();
  }

  return (
    <section className="coins-list-cmp ">
      <h2>Home Page</h2>
      <Button variant="contained" color="success" onClick={onLogout}>
        Logout
      </Button>
      <div className="coin-list simple-cards-grid">
        {coins.map((coin) => (
          <CoinPreview key={coin.symbol} coin={coin} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
