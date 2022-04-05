// import React from 'react'
import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import Usercontext from './usercontext';

function User() {
    
    // const userarr=
    const usercontext=useContext(Usercontext);
  return (
           <>
       <div class="container-fluid">
         <div class="row"> 
    <h1 class="col-sm-10 col-md-10 col-lg-10 col-xl-10 h3 mb-2 text-gray-800">Users</h1>
    <Link  to={'/userform'}>
    <button class="button bg-primary">Create</button>
    </Link></div>
    
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p>
            <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">User Details</h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                            {/* <th>ID</th> */}
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Salary</th>
                                                <th>Buttons</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {
                                                
                                                usercontext.createform.map((e,index)=>
                                                {
                                                    return(
                                                <tr>
                                                <td>{e.name}</td>
                                                <td>{e.age}</td>
                                                <td>Rs.{e.salary}</td>
                                                <td><div class="d-grid gap-5 d-md-block">
                                                <Link to={`/Userview/${index}`} class="btn btn-primary" type="button">View</Link>
                                                 <Link to={`/Useredit/${index}`} class="btn btn-success" type="button">Edit</Link>
                                                 <button class="btn btn-danger" type="button">Delete</button>
                                                </div></td>
                                                
                                            </tr>
                                                    );
                                                })
                                            }

</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    
                   
                
      </>
  )
}

export default User;







                                            
                                          