import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Front from "./pages/home/front";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import UserList from "./pages/home/userlis/UserList";
import EmployeeList from "./pages/home/employee/EmployeeList";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <Router>
     
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}>
          
          </Route>
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList/>}>
          
          </Route>
          {/* <Routes> */}
          <Route path="/employee" element={<EmployeeList/>}>
          
          </Route>
          
        </Routes>
        
      </div>
      
      
    </Router>
  );
}

export default App;
