import React from 'react';


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