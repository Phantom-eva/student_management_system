import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   gender: "",
   age: "",
   gpa: "",
   photo: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", gender: "", age: "", gpa: "", photo: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Student</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
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
         <label htmlFor="age">Age: </label>
         <input
           type="text"
           className="form-control"
           id="age"
           value={form.age}
           onChange={(e) => updateForm({ age: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="gpa">Gpa: </label>
         <input
           type="text"
           className="form-control"
           id="gpa"
           value={form.gpa}
           onChange={(e) => updateForm({ gpa: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="photo">Photo: </label>
         <input
           type="text"
           className="form-control"
           id="photo"
           value={form.photo}
           onChange={(e) => updateForm({ photo: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}