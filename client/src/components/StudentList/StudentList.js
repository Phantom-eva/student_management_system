import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Student = (props) => (
 <tr>
   <td>{props.student.sid}</td>
   <td>{props.student.name}</td>
   <td>{props.student.gender}</td>
   <td>{props.student.dob}</td>
   <td>{props.student.section}</td>
   <td>{props.student.comment}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.student._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteStudent(props.student._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function StudentList() {
 const [students, setStudents] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getStudents() {
     const response = await fetch(`http://localhost:5050/student/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const students = await response.json();
     setStudents(students);
   }
 
   getStudents();
 
   return;
 }, [students.length]);
 
 // This method will delete a record
 async function deleteStudent(id) {
   await fetch(`http://localhost:5050/student/${id}`, {
     method: "DELETE"
   });
 
   const newStudents = students.filter((el) => el._id !== id);
   setStudents(newStudents);
 }
 
 // This method will map out the records on the table
 function studentList() {
   return students.map((student) => {
     return (
       <Student
         student={student}
         deleteStudent={() => deleteStudent(student._id)}
         key={student._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Student List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Student ID</th>
           <th>Name</th>
           <th>Gender</th>
           <th>Date of Birth</th>
           <th>Section</th>
           <th>Comment</th>
           <th>Edit Option</th>
         </tr>
       </thead>
       <tbody>{studentList()}</tbody>
     </table>
   </div>
 );
}