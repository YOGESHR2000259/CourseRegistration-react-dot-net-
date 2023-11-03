import axios from "axios";
import { useEffect, useState } from "react";





function Course() {

const [id, setId] = useState("");
const [name, setName] = useState("");

const [courses, setUsers] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    
    const result = await axios.get("https://localhost:7144/api/Course/GetCourse");
    setUsers(result.data);
    console.log(result.data);
  }
 
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("https://localhost:7144/api/Course/AddNewCourse", {
        
        name: name,
        
       
      });
      alert(" Registration Successfull");
          setId("");
          setName("");
          
       
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editCourse(courses) {
    setName(courses.name);
    
   
 
    setId(courses.id);
  }
 

  async function DeleteCourse(id) {
  await axios.delete("https://localhost:7144/api/Course/DeleteCourse/" + id);
   alert("deleted Successfully");
   setId("");
   setName("");
  
   Load();
  }
 

  async function update(event) {
    event.preventDefault();
    try {

  await axios.patch("https://localhost:7144/api/Course/UpdateCourse/"+ courses.find((u) => u.id === id).id || id,
        {
        id: id,
        name: name,
       

        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

    return (
      <div>
        <h3>Add Course</h3>
      <div class="container mt-4">
        <form>
          <div class="form-group">
           
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Course Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col"> Id</th>
            <th scope="col">Name</th>
            
         
 
            <th scope="col">Option</th>
          </tr>
        </thead>
        {courses.map(function fn(course) {
          return (
            <tbody>
              <tr>
                <th scope="row">{course.id} </th>
                <td>{course.name}</td>
                <td>{course.course}</td>
                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editCourse(course)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteCourse(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
        
      </div>
    );
  }
  
  export default Course;