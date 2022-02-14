import useSWR from "swr";
import { useState } from "react";
//Pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
//components
import { MyHeader } from "./cmps/MyHeader.jsx";
// import { MyFooter } from "./cmps/MyFooter.jsx";

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: coins } = useSWR(
    "http://localhost:1880/api/coins",
    fetcher
  );

  const [symbol, setSymbol] = useState("");
  const Login = (detail) => {
    console.log(detail);
    setSymbol(detail.symbol);
  };
  const Logout = () => {
    setSymbol("");
    console.log("logout");
  };
  const sendError = () => {
    alert(`Invalid Symbol please try another one`);
  };

  return (
    <div className="App">
      <div className="my-header">
        <MyHeader />
      </div>
      <div className="main-content">
        {symbol !== "" ? (
          <div className="coinPage">
            <HomePage coins={coins} Logout={Logout} />
          </div>
        ) : (
          <div className="loginPage">
            <LoginPage coins={coins} Login={Login} sendError={sendError} />
          </div>
        )}
      </div>
      {/* <div className="my-footer">
        <MyFooter />
      </div> */}
    </div>
  );
}

export default App;
