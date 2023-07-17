import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/Navbar/Navbar";
import StudentList from "./components/StudentList/StudentList";
import Edit from "./components/Edit/Edit";
import Create from "./components/Create/Create";
import Footer from "./components/Footer/Footer";

// import the style file
import './App.css'
 
const App = () => {
 return (
   <div>
     <Navbar />
     <div className="App">
     <Routes>
       <Route exact path="/" element={<StudentList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
     </div>
     <Footer />
   </div>
 );
};
 
export default App;