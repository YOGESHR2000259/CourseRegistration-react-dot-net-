import React from "react";
import CourseNavbar from "./CourseNavbar"

import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Course from "./Course";
import Footer from "./Footer";


const CourseRouting = ()=> {
    return(
        <>
      <CourseNavbar/>
      
      
      
      <Routes>
        <Route path="/" default element={<Home />}/>
        <Route path="/Registration" element={<Registration />}/>
        <Route path="/Course" element={<Course />}/>
        <Route path="/Footer" element={<Footer/>}/>
        
      </Routes>
        </>
    )
}
export default CourseRouting;