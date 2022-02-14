//pages
//components
import { MyHeader } from "./cmps/MyHeader.jsx";
import { MyFooter } from "./cmps/MyFooter.jsx";

function App() {
  return (
    <div className="App">
      <div className="my-header">
        <MyHeader />
      </div>
      <h1>MainTemplate</h1>
      <div className="my-footer">
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
