import useSWR from "swr";
import { useState } from "react";
//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
//components
import { MyHeader } from "./cmps/MyHeader.jsx";
import { MyFooter } from "./cmps/MyFooter.jsx";

function App() {
  //in this case i used swr to fetch data from the server
  //this is the first time i use this hook.
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  /**
   * http://localhost:1880/api/coins
   * is the end point of our API, this route fetch all the coins
   */
  const { data: coins, error } = useSWR(
    "http://localhost:1880/api/coins",
    fetcher
  );
  const [symbol, setSymbol] = useState("");

  const Login = (detail) => {};
  const Logout = () => {};
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
          <div className="homePage">
            <HomePage coins={coins} Logout={Logout} />
          </div>
        ) : (
          <div className="loginPage">
            <LoginPage coins={coins} Login={Login} sendError={sendError} />
          </div>
        )}
      </div>
      <div className="my-footer">
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
