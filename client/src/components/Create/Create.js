import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
  sid: "",
  name: "",
  gender: "",
  dob: "",
  section: "",
  comment: "",
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
 
   await fetch("http://localhost:5050/student", {
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
 
   setForm({ sid: "", name: "", gender: "", dob: "", section: "", comment: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Student</h3>
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
         <label htmlFor="gender">Gender: </label>
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
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="sectionOptions"
             id="section001"
             value="001"
             checked={form.section === "001"}
             onChange={(e) => updateForm({ section: e.target.value })}
           />
           <label htmlFor="section001" className="form-check-label">001</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="sectionOptions"
             id="section002"
             value="002"
             checked={form.section === "002"}
             onChange={(e) => updateForm({ section: e.target.value })}
           />
           <label htmlFor="section002" className="form-check-label">002</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="sectionOptions"
             id="section003"
             value="003"
             checked={form.section === "003"}
             onChange={(e) => updateForm({ section: e.target.value })}
           />
           <label htmlFor="section003" className="form-check-label">003</label>
         </div>
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
       <div className="form-group">
         <input
           type="submit"
           value="Create Student"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}