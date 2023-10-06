import React from 'react';
import "./Emptable.css";


const data = [
    { name: "Gowtu", age: 29, gender: "Male" },
    { name: "Srilu", age: 30, gender: "Female" },
    { name: "Suresh", age: 32, gender: "Male" }
]

function App() {
    return (
        <div className='App'>
            <h3 className='emp'> EmployeeTable..!</h3>
            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}



export default App;