import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Profile from './profile';
import User from './user'
import Userform from './userform';
import Profileform from './profileform';
import Userview from './userview';
import Useredit from './useredit';
import Profileview from './profileview';
import Profileedit from'./profileedit';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Userprovider } from './usercontext';
import { useState } from 'react';

function App() {
  
  const[createform,setcreateform]=useState([
    {
        id:1,
        name:"Deebika",
        age:33,
        salary:50000
    },
    {
        id:2,
        name:"karthish",
        age:20,
        salary:90000
    },
    {
        id:3,
        name:"Subramanian",
        age:40,
        salary:200000
    },
    {
        id:4,
        name:"Hemalatha",
        age:30,
        salary:40000
    },
    {
        id:5,
        name:"kabinesh",
        age:18,
        salary:50000
    },
    {
        id:6,
        name:"Nimalan",
        age:22,
        salary:80000
    },
    {
        id:7,
        name:"Praneeth",
        age:25,
        salary:100000
    },
    {
        id:8,
        name:"Magizhini",
        age:22,
        salary:70000
    },
    {
        id:9,
        name:"Harish",
        age:26,
        salary:80000
    },
    {
        id:10,
        name:"Madhunisha",
        age:21,
        salary:60000
    },
]);
  
   const [createprofile,setprofile]=useState([
    {
        id:1,
        name:"Deebika",
        age:33,
        dob:"08/12/1989",
        city:"Nairobi",
        qualification:"M.sc(IT)"

    },
    {
        id:2,
        name:"karthish",
        age:22,
        dob:"08/05/2000",
        city:"Nairobi",
        qualification:"M.tech"
    },
    {
        id:3,
        name:"Subramanian",
        age:61,
        dob:"28/06/1960",
        city:"Trichy",
        qualification:"B.Sc"
    },
    {
        id:4,
        name:"Hemalatha",
        age:56,
        dob:"27/02/1965",
        city:"Nairobi",
        qualification:"B.A"
    },
    {
        id:5,
        name:"kabinesh",
        age:18,
        dob:"31/12/2004",
        city:"Nairobi",
        qualification:"M.tech"
    },
    {
        id:6,
        name:"Nimalan",
        age:21,
        dob:"06/07/2001",
        city:"Nigeria",
        qualification:"M.sc(IT)"
    },
    {
        id:7,
        name:"Praneeth",
        age:20,
        dob:"28/09/2002",
        city:"Jammu",
        qualification:"M.E"
    },
    {
        id:8,
        name:"Magizhini",
        age:18,
        dob:"14/07/2004",
        city:"Jammu",
        qualification:"C.A"
    },
    {
        id:9,
        name:"Harish",
        age:26,
        dob:"08/12/1996",
        city:"Chennai",
        qualification:"M.C.A"
    },
    {
        id:10,
        name:"Madhunisha",
        age:28,
        dob:"08/12/1994",
        city:"Chennai",
        qualification:"B.C.A"
    },
])
 
  return (
    <BrowserRouter> 
     <div id="wrapper">
       <Userprovider value={{createform,setcreateform,createprofile,setprofile}}>
            <Sidebar></Sidebar>
       <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
              <Topbar></Topbar>
               <div class="container-fluid">
            <Routes>
           
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path='/user'element={<User />}></Route>
              <Route path="/userform" element={<Userform/>}></Route>
              <Route path="/profileform" element={<Profileform/>}></Route>
              <Route path="/userview/:id" element={<Userview/>}></Route>
              <Route path="/useredit/:id" element={<Useredit/>}></Route>
              <Route path="/profileview/:id" element={<Profileview/>}></Route>
              <Route path="/profileedit/:id" element={<Profileedit/>}></Route>
                          
              </Routes>
              </div>
     </div>
     </div>
     </Userprovider>
    
            </div>
            </BrowserRouter>
  );
}

export default App;
