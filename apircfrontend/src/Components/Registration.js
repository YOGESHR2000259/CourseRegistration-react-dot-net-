import axios from "axios";
import { useEffect, useState } from "react";




function Registration() {

    const [id, setId] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [emailid, setEmailId] = useState("");
    const [dob, setDOB] = useState("");
    const [selectcourse, setSelectCourse] = useState("");
    const [registrations, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {

        const result = await axios.get("https://localhost:7144/api/Registration/GetRegistration");
        setUsers(result.data);
        console.log(result.data);
    }

    async function save(event) {

        event.preventDefault();
        try {
            await axios.post("https://localhost:7144/api/Registration/AddRegistration", {

                firstname: firstname,
                lastname: lastname,
                emailid: emailid,
                dob: dob,
                selectcourse: selectcourse,



            });
            alert(" Registration Successfully");
            setId("");
            setFirstName("");
            setLastName("");
            setEmailId("");
            setDOB("");
            setSelectCourse("");


            Load();
        } catch (err) {
            alert(err);
        }
    }

    async function editRegistration(registrations) {
        setFirstName(registrations.firstname);
        setLastName(registrations.lastname);
        setEmailId(registrations.emailid);
        setDOB(registrations.dob)
        setSelectCourse(registrations.selectcourse);


        setId(registrations.id);
    }


    async function DeleteRegistration(id) {
        await axios.delete("https://localhost:7144/api/Registration/DeleteRegistration/" + id);
        alert(" deleted Successfully");
        setId("");
        setFirstName("");
        setLastName("");
        setEmailId("");
        setDOB("");
        setSelectCourse("");
        Load();
    }


    async function update(event) {
        event.preventDefault();
        try {

            await axios.patch("https://localhost:7144/api/Registration/UpdateRegistration/" + registrations.find((u) => u.id === id).id || id,
                {
                    id: id,
                    firstname: firstname,
                    lasttname: lastname,
                    emailid: emailid,
                    dob: dob,
                    selectcourse: selectcourse,

                }
            );
            alert("Registation Updateddddd");
            setId("");
            setFirstName("");
            setLastName("");
            setEmailId("");
            setDOB("");
            setSelectCourse("");

            Load();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <h3>Course Registration</h3>
            <div className="container mt-4">
                <form>
                    <div className="form-group">

                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            hidden
                            value={id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />

                        <label> FirstName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            value={firstname}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }}
                        />
                    </div>
                        <div className="form-group">
                        <label>LastName</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            value={lastname}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }}
                        />
                    <div className="form-group">
                        <label>EmailId</label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailid"
                            value={emailid}
                            onChange={(event) => {
                                setEmailId(event.target.value);
                            }}
                        />
                    <div className="form-group">
                        <label>DOB</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="dob"
                            value={dob}
                            onChange={(event) => {
                                setDOB(event.target.value);
                            }}
                        />
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                        <label>SelectCourse</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={selectcourse}
                            onChange={(event) => {
                                setSelectCourse(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button>
                        <button className="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br></br>

            <table className="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col"> FirstName</th>
                        <th scope="col"> LastName</th>
                        <th scope="col"> EmailId</th>
                        <th scope="col"> DOB</th>
                        <th scope="col">Course</th>


                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {registrations.map(function fn(registration) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{registration.id} </th>
                                <td>{registration.firstname}</td>
                                <td>{registration.lastname}</td>
                                <td>{registration.emailid}</td>
                                <td>{registration.dob}</td>
                                <td>{registration.selectcourse}</td>

                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => editRegistration(registration)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => DeleteRegistration(registration.id)}
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

export default Registration;