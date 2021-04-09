import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          {/* exact để so sánh path chính xác */}
          {/* Cách 1 */}
          <Route path="/home" exact component={Home}></Route>
          {/* Set trang chủ */}
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
