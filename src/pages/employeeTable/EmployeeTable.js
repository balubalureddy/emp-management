import React from 'react';
import "./Emptable.css";
import { useReducer } from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const initialState = {
    employees: [
        { name: "Gowtu", age: 29, gender: "Male" },
        { name: "Srilu", age: 30, gender: "Female" },
        { name: "Suresh", age: 32, gender: "Male" },
    ],
};

function App() {
    const [newEmployee, setNewEmployee] = useState({ name: "", age: 29, gender: "Male" })
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_EMPLOYEE':
                return {
                    ...state,
                    employees: [...state.employees, action.payload]
                }
            case 'UPDATE_EMPLOYEE':
                return {
                    ...state,
                    employees: state.employees.map(employee => employee.age === action.payload.age ? action.payload : employee)
                }
            case 'DELETE_EMPLOYEE':
                return {
                    ...state,
                    employees: state.employees.filter(employee => employee.name !== action.payload)
                }
            default:
                return state;
        }
    }, initialState)

    const handleAddEmployee = () => {
        dispatch({ type: 'UPDATE_EMPLOYEE', payload: newEmployee });
        setNewEmployee({ name: "", age: 29, gender: "Male" });
    }
    return (
        <div className='App'>
            <h3 className='emp'> EmployeeTable..!</h3>
            <input type='text' placeholder='name' value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
            <button id="update" onClick={handleAddEmployee}>Add / Update employee</button>
            <table className='table table-striped'>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.employees.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <Stack direction={{ xs: 'column', sm: 'row' }}
                                             spacing={{ xs: 1, sm: 2, md: 4 }}>
                                <td id="edit"><Item onClick={(e) => setNewEmployee(val)}>Edit</Item></td>
                                <td id="delete"><Item onClick={() => dispatch({ type: 'DELETE_EMPLOYEE', payload: val.name })}>Delete</Item></td>
                                </Stack>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default App;