import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import Usercontext from './usercontext';

function Userview() {
    let params=useParams();
    let userviewcontext=useContext(Usercontext)
  return (
      
    <div class="viewprofile"><h1 class="text-center" style={{color:"green"}}>User Details</h1>
    <table class="table bordered">
        <thead class="tablehead">
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
                
            </tr>
        </thead>
        <tbody class="tablebody">
            <td>{userviewcontext.createform[params.id].name}</td>
            <td>{userviewcontext.createform[params.id].age}</td>
            <td>{userviewcontext.createform[params.id].salary}</td>
                    </tbody>
     
    </table></div>
    
  )
}

export default Userview;