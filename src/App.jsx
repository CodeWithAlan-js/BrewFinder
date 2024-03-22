// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./views/EntryPage";
import HomePage from "./views/HomePage";
import { UserProvider } from "./components/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact Component={EntryPage} />
          <Route path="/home-page" Component={HomePage} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
