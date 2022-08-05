import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Database } from "./pages/database/Database";
import { Logout } from "./pages/logout/Logout";
import { OrderDetails } from "./pages/order-details/OrderDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route exact path="/database" element={<Database />}></Route>
          <Route exact path="/order-details" element={<OrderDetails />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
