import logo from "./logo.svg";
import "./App.css";
import EmployeeTable from "./pages/employeeTable/EmployeeTable";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import creatingTable from "./pages/creatingTable/table";
import Creatingform from "./pages/Creatingform/form";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={EmployeeTable} />
      <Route path="/AddEmployee.js" Component={AddEmployee} />
      <Route path="/table.js" Component={creatingTable} />
      <Route path="/form.js" Component={Creatingform} />
    </Routes>
  );
}

export default App;
