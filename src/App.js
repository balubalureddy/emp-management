import logo from "./logo.svg";
import "./App.css";
import EmployeeTable from "./pages/employeeTable/EmployeeTable";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={EmployeeTable} />
      <Route path="/add-employee" Component={AddEmployee} />
    </Routes>
  );
}

export default App;
