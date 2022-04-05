// import React from 'react'
import { useFormik } from 'formik'
import Usercontext from './usercontext';
import React, { useContext } from 'react';

function Userform() {
const profilecontext=useContext(Usercontext)
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name= 'Name cannot be empty';
    }
    if(!values.age||values.age<18)
    errors.age="Age cannot be empty and should be greater than 18"
    if(!values.dob)
    errors.dob="Date of birth cannot be empty"
    if(!values.city)
    errors.city="City cannot be empty"
    if(!values.qualification)
    errors.qualification="qualification cannot be empty"
    return errors;
    
  }
  
  let formik = useFormik({
    initialValues: {
      name:"",
      age: 0,
      dob: "",
      city:"",
      qualification:""
      
    },
    validate,
     onSubmit: values => {
       //alert(JSON.stringify(values, null, 2));
       console.log(values)
       profilecontext.setprofile([...profilecontext.createprofile,values])
       console.log(profilecontext.createprofile)
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
          <label>Age:</label>
          <input class="form-control" type={"number"} Placeholder="Enter your Age" 
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
          <label>DateOfBirth:</label>
          <input class="form-control" type={"date"} Placeholder="Enter date of birth" 
            name="dob"
            onChange={formik.handleChange}
            value={formik.values.dob}
            style={{border:formik.errors.salary?"solid 1px red":"solid 1px green"}}/>
           <span style={{color:"red"}}>
            {formik.errors.dob?<div>{formik.errors.dob}</div>:""}</span>
         </div>
        </div>

        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label>City:</label>
          <input class="form-control" type={"text"} Placeholder="Enter City" 
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            style={{border:formik.errors.city?"solid 1px red":"solid 1px green"}}/>
           <span style={{color:"red"}}>
            {formik.errors.city?<div>{formik.errors.city}</div>:""}</span>
        </div>
        </div>

        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label>Qualification:</label>
          <input class="form-control" type={"text"} Placeholder="Enter the qualification" 
            name="qualification"
            onChange={formik.handleChange}
            value={formik.values.qualification}
            style={{border:formik.errors.qualification?"solid 1px red":"solid 1px green"}}/>
           <span style={{color:"red"}}>
            {formik.errors.qualification?<div>{formik.errors.qualification}</div>:""}</span>
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