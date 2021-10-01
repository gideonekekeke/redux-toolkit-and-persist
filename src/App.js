import logo from "./logo.svg";
import "./App.css";
import HeaderView from "./Components/HeaderView";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import AllFriends from "./Components/AllFriends";
import FriendsDetails from "./Components/FriendsDetails";

function App() {
  return (
    <div>
      <Router>
        <HeaderView />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/friends" component={AllFriends} />
          <Route path="/details" component={FriendsDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
