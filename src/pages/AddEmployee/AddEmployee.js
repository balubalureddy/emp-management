import React from 'react';
// import { useState } from 'react';
import "./AddEmp.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function Multiple() {
//     const [formData, setFormData] = useState({ name: "", email: "", message: "" })

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Name : ${formData.name} ,Email : ${formData.email} , Message : ${formData.message}`);
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='name'>Name:</label>
//                 <input type="text" id="name" value={formData.name} onChange={handleChange}></input><br />
//                 <label htmlFor='email'>Email:</label>
//                 <input type="text" id="email" value={formData.email} onChange={handleChange}></input><br />
//                 <label htmlFor='message'>Message:</label>
//                 <input type="text" id="message" value={formData.message} onChange={handleChange}></input><br />
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     );
// }
// App.js 


function App() {
    return (
        <div className='App'>
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="firstname">First Name*</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Enter First Name" required /><br /><br />
                    <label for="lastname">Last Name*</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Enter Last Name" required /><br /><br />
                    <label for="email">Enter Email*</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" required /><br /><br />
                    <label for="des">Designation*</label>
                    <input type="des" id="des" name="des" placeholder="Enter Designation" required /><br /><br />
                    <label for="date">DateOfBirth*</label>
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs} placeholder="Enter DateOfBirth">
                        <DatePicker />
                    </LocalizationProvider><br/>
                    <label for="gender">Gender*</label><br />
                    <input type="radio" name="gender" value="" id="male" />Male
                    <input type="radio" name="gender" value="" id="Female" />Female
                    <input type="radio" name="gender" value="" id="other" />Other<br /><br />
                    <label for="sal">Salary*</label>
                    <input type="sal" id="sal" name="sal" placeholder="Enter Salary" required /><br /><br />
                    <label>Select Your Skills</label>
                    <select name="select" id="select">
                        <option value="" disabled selected>Select your ans</option>
                        <optgroup label='Beginers'>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label='Advance'>
                            <option value="1">React</option>
                            <option value="2">Node</option>
                            <option value="3">Express</option>
                        </optgroup>
                    </select><br /><br />
                    <label for="about">About</label><br />
                    <textarea name="about" id="about" rows="10" cols="30" placeholder='About Yourself' required></textarea><br /><br />
                    <label></label><br />
                    <button type="reset" value="reset">Reset</button>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </fieldset>
            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}


export default App;

