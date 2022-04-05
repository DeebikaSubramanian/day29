import React, { useContext } from 'react'
import { useFormik } from 'formik'
import Usercontext from './usercontext';

function Userform() {
const usercontext=useContext(Usercontext)

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name= 'Name cannot be empty';
    }
    if(!values.age||values.age<18)
    errors.age="Age cannot be empty and should be greater than 18"
    if(!values.salary||values.salary<5000)
    errors.salary="Salary cannot be empty and should be greater than 5000"
    return errors;
    }
  
  let formik = useFormik({
    initialValues: {
      name:"",
      age: 0,
      salary: 0,
      
    },
    validate,
     onSubmit: values => {
       usercontext.setcreateform([...usercontext.createform,values])
    },
    }
  )

  return (
    <div class="container"><h2 class="text-primary fs-1 text-center fw-bolder">Enter the Fields</h2>
      <form onSubmit={formik.handleSubmit}>
      
        <div class="row">
<div class="col-12">
          <label>Name:</label>
          <input class="form-control" type={"text"} Placeholder="Enter the Name" 
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{border:formik.errors.name?"solid 1px red":"solid 1px green"}}/>
            <span style={{color:"red"}}>
            {formik.errors.name?<div>{formik.errors.name}</div>:""}</span>
                    </div></div>
        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label>Salary:</label>
          <input class="form-control" type={"text"} Placeholder="Enter your Salary" 
            name="salary"
            onChange={formik.handleChange}
            value={formik.values.salary}
            style={{border:formik.errors.salary?"solid 1px red":"solid 1px green"}}/>
           <span style={{color:"red"}}>
            {formik.errors.salary?<div>{formik.errors.salary}</div>:""}</span>
            
        </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label>Age:</label>
          <input class="form-control" type={"text"} Placeholder="Enter your Age" 
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            style={{border:formik.errors.age?"solid 1px red":"solid 1px green"}}/>
            <span style={{color:"red"}}>
            {formik.errors.age?<div>{formik.errors.age}</div>:""}</span>
            </div>
        </div>
              
        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="text-center">
            <input type="submit" disabled={Object.keys(formik.errors).length!==0} class="btn btn-primary"/></div>
            </div>
        </div>
              </form>
      </div>
  )
}

export default Userform;