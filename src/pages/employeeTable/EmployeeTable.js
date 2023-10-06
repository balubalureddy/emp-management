import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';


const initialState = {
  employees: [
    { name: "Gowtu", age: 29, gender: "Male" },
    { name: "Srilu", age: 30, gender: "Female" },
    { name: "Suresh", age: 32, gender: "Male" },
  ],
};

function App() {
    const [newEmployee, setNewEmployee] = useState({ name: "", age: 29, gender: "Male" })
    const [state,dispatch] = useReducer((state,action)=>{
        switch (action.type) {
            case 'ADD_EMPLOYEE':
                return {
                    ...state,
                    employees:[...state.employees,action.payload]
                }
            case 'UPDATE_EMPLOYEE':
                return {
                    ...state,
                    employees:state.employees.map(employee => employee.age === action.payload.age ? action.payload : employee)
                }
            case 'DELETE_EMPLOYEE':
                return {
                    ...state,
                    employees:state.employees.filter(employee => employee.name !== action.payload)
                }
            default:
                return state;
        }
    },initialState)

    const handleAddEmployee = () => {
        dispatch({type:'UPDATE_EMPLOYEE',payload: newEmployee});
        setNewEmployee({ name: "", age: 29, gender: "Male" });
    }
    return (
        <div className='App'>
            <h3 className='emp'> EmployeeTable..!</h3>
            <input type='text' placeholder='name' value={newEmployee.name} onChange={(e)=> setNewEmployee({...newEmployee,name:e.target.value})}/>
            <button onClick={handleAddEmployee}>Add / Update employee</button>
            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {state.employees.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td><button onClick={(e)=> setNewEmployee(val)}>Edit</button><button onClick={()=> dispatch({type:'DELETE_EMPLOYEE',payload: val.name})}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

// function EmployeeTable(props) {
//     return (
//         <div className='App'>
//             Employee Table..!
//             <table>
//                 <tr>
//                     <th>EmpName</th>
//                     <th>EmpAge</th>
//                     <th>Gender</th>
//                 </tr>
//                 <tr>
//                     <td>Balu</td>
//                     <td>35</td>
//                     <td>Male</td>
//                 </tr>
//                 <tr>
//                     <td>Naveen</td>
//                     <td>28</td>
//                     <td>Male</td>
//                 </tr>
//                 <tr>
//                     <td>Srikanya</td>
//                     <td>24</td>
//                     <td>Female</td>
//                 </tr>
//             </table>
//         </div>
//     );
// }

export default App;