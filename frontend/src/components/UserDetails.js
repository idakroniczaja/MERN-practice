import axios from 'axios';
import React , {useState, useEffect} from 'react';

import EditUser from '../components/EditUser'


export default function UserDetails(props) {

const [userDetails, setUserDetails] = useState({});


const getDetails = () => {
    axios.get(`http://localhost:5000/api/all-users/${props.match.params.id}`)
    .then(response=>{
        setUserDetails(response.data)
    })
}

useEffect(()=>{

getDetails();

},[]);


const deleteUser = () =>{
    axios.delete(`http://localhost:5000/api/all-users/${props.match.params.id}`)
    .then(res=>{
        props.history.push('/all-users')
    })
    .catch(err=>console.log(err))

}

// const handleUpdate = (e) => {   
//     console.log('bluurrrr', e.target)

// axios.put(`http://localhost:5000/api/all-users/${props.match.params.id}`, {[e.target.name]: e.target.value })
//     .then(res => {
//       console.log(res.data)
//       getDetails();

//     })
//     .catch( error => console.log(error) )

//   }

    return (
        
        <div>
        {console.log(userDetails)}
            <h2>Detail page</h2>
            <h3>{userDetails.username} - {userDetails.password}</h3>
        <img width= '400vw' src={userDetails.imageUrl}/>
            <button onClick={deleteUser}>Delete</button>
           
   


            {/* <input onBlur={handleUpdate} name='username' value={userDetails.username} onChange={(e)=>setUserDetails(e.target.value)}/>
            <input onBlur={handleUpdate} name='password' value={userDetails.password} onChange={(e)=>setUserDetails(e.target.value)}/>
            <button>Edit</button> */}


            <EditUser userDetails={userDetails} updateDetails={setUserDetails} getDetails={getDetails} {...props}/>
        </div>
    )
}
