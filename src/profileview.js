import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import Usercontext from './usercontext';

function Profileview() {
    let params=useParams();
    let profileviewcontext=useContext(Usercontext)
      return (
      
    <div class="viewprofile"><h1 class="text-center" style={{color:"green"}}>Profile Details</h1>
    <table class="table bordered">
        <thead class="tablehead">
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>D.O.B</td>
                <td>City</td>
                <td>Qualification</td>
            </tr>
        </thead>
        <tbody class="tablebody">
            <td>{profileviewcontext.createprofile[params.id].name}</td>
            <td>{profileviewcontext.createprofile[params.id].age}</td>
            <td>{profileviewcontext.createprofile[params.id].dob}</td>
            <td>{profileviewcontext.createprofile[params.id].city}</td>
            <td>{profileviewcontext.createprofile[params.id].qualification}</td>
        </tbody>
     
    </table></div>
    
  )
}

export default Profileview;