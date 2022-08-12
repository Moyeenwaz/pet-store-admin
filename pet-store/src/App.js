import "./App.css";
import { useState } from "react";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Database } from "./pages/database/Database";
import { Logout } from "./pages/logout/Logout";
import { OrderDetails } from "./pages/order-details/OrderDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              isLoggedin ? (
                <Dashboard />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          ></Route>
          <Route exact path="/database" element={<Database />}></Route>
          <Route exact path="/order-details" element={<OrderDetails />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
