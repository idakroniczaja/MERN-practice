import axios from 'axios';
import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './User.css'

import CreateUser from '../components/CreateUser';
 


export default function Users({history, match}) {

const [users, setUsers] = useState([]);


const allUsersFromDb = () => {
    axios.get('http://localhost:5000/api/all-users')
    .then(res=>{
        setUsers(res.data)
        
    })
    .catch(err=>{
        console.log(err)
    });
}

const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/all-users/${id}`)
    .then(()=>{
        let newUsers = [...users].filter(user=>user._id!==id)
        setUsers(newUsers);
    })
    .catch(err=>console.log(err))
}

useEffect(()=>{
    allUsersFromDb();
},[])




const showAllUsers = () => {

   return  users.map(user=>{
        return (
            <div className='each-user'>
            <Link className='link' to={`/all-users/${user._id}`}> <li key={user._id}>{user.username}</li></Link>
           
            <button onClick={()=>deleteUser(user._id)}>Delete</button>
           
            </div>
           
        )
    })
}





    return (
        <div className='all-users'>
        <CreateUser usersDB={allUsersFromDb}/>

        {users.length===0 && <h2>No users to show</h2> || <h2>All users</h2>}
            
            <ol>
            {showAllUsers()}
            </ol>


        </div>
    )
}
