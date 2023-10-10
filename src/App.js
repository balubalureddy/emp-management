import logo from "./logo.svg";
import "./App.css";
import EmployeeTable from "./pages/employeeTable/EmployeeTable";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import creatingTable from "./pages/creatingTable/table";
import Creatingform from "./pages/Creatingform/form";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={EmployeeTable} />
      <Route path="/AddEmployee" Component={AddEmployee} />
      <Route path="/table" Component={creatingTable} />
      <Route path="/form" Component={Creatingform} />
    </Routes>
    </>
  );
}

export default App;
