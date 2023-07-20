import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   sid: "",
   name: "",
   gender: "",
   dob: "",
   section: "",
   comment: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5050/student/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const student = await response.json();
     if (!student) {
       window.alert(`Student with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(student);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     sid: form.sid,
     name: form.name,
     gender: form.gender,
     dob: form.dob,
     section: form.section,
     comment: form.comment
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5050/student/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Student Information</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="sid">ID (between 1 and 30): </label>
         <input
           type="number"
           className="form-control"
           id="sid"
           min="1"
           max="30"
           value={form.sid}
           onChange={(e) => updateForm({ sid: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <br />
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genderOptions"
             id="genderMale"
             value="Male"
             checked={form.gender === "Male"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="genderMale" className="form-check-label">Male</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="genderOptions"
             id="genderFemale"
             value="Female"
             checked={form.gender === "Female"}
             onChange={(e) => updateForm({ gender: e.target.value })}
           />
           <label htmlFor="genderFemale" className="form-check-label">Female</label>
         </div>
       </div>
       <div className="form-group">
         <label htmlFor="dob">Date of Birth: </label>
         <input
           type="date"
           className="form-control"
           id="dob"
           value={form.dob}
           onChange={(e) => updateForm({ dob: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="section">Section:</label>
         <br />
         <select name="section" id="section" form="sectionform">
          <option value="001">001</option>
          <option value="002">002</option>
          <option value="003">003</option>
         </select>
       </div>
       <div className="form-group">
         <label htmlFor="comment">Comment: </label>
         <input
           type="text"
           className="form-control"
           id="comment"
           value={form.comment}
           onChange={(e) => updateForm({ comment: e.target.value })}
         />
       </div>
       <br />
       <div className="form-group">
         <input
           type="submit"
           value="Update Student"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}