import React, { useState } from "react";
import { displayEmp } from "../Service/EmployeeService";

//  const DisplayAllEmployees = () => {

    //   useEffect(() => {
    //     // Fetch data from the API when the component mounts
    //     fetch("http://localhost:8080/api/v1/employees")
    //       .then((response) => response.json())
    //       .then((data) => setEmployees(data))
    //       .catch((error) => console.error("Error fetching employees:", error));
    //   }, []);

    function GetEmployees(){
        const [employees, setEmployees] = useState([]);

        displayEmp().then((response) => 
            {
                setEmployees(response.data);
            });
        
    
    return (
        <div>
            <h1>Employee List</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Emp ID</th>
                        <th>Emp Name</th>
                        <th>Emp Age</th>
                        <th>Emp Location</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.eid}>
                            <td>{employee.eid}</td>
                            <td>{employee.ename}</td>
                            <td>{employee.eage}</td>
                            <td>{employee.eloc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GetEmployees;
