import "assets/css/app.css";
import Provider from "helpers/hooks/useGlobalContext";
import CartPage from "pages/CartPage";
import DetailPage from "pages/DetailPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import SuccessPage from "pages/SuccessPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      {/* <div className="App"> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:productId" component={DetailPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/success" component={SuccessPage} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
      {/* </div> */}
    </Provider>
  );
}

export default App;
