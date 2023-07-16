import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import StudentList from "./components/studentList";
import Edit from "./components/edit";
import Create from "./components/create";

import './App.css'
 
const App = () => {
 return (
   <div className="App">
     <Navbar />
     <Routes>
       <Route exact path="/" element={<StudentList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;