import React from 'react'
import {Formik} from 'formik'

function Useredit() {
  return (
    <div class="container"><h2 class="text-primary fs-1 text-center fw-bolder">Enter the Fields</h2><form>
              <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Name:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left" type="text" Placeholder="Enter the Name" required></input>
    </div>
    <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Age:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your Age" required></input>
   </div>
   <div class="row">
    <label class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right fs-1">Salary:</label>
    <input class="col-sm-5 col-md-5 col-lg-5 col-xl-5 text-left"type="text" Placeholder="Enter your Salary" required></input>
    </div>
    <div class="row">
    <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center">
        <button class="my-center">Submit</button></div>
    </div>
</form></div>
  )
}

export default Useredit