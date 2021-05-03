import axios from 'axios';


import React, {useState, useEffect} from 'react'


export default function EditUser(props) {

    const handleUpdate2 = (e) => {   
        console.log('other', e.target.name, e.target.value)
    
    axios.put(`http://localhost:5000/api/all-users/${props.match.params.id}`, {[e.target.name]: e.target.value })
        .then(res => {
          console.log(res.data)
          props.getDetails();
    
        })
        .catch( error => console.log(error) )

     
    
      }
    return (
        <div>
           <input onBlur={handleUpdate2} name='username' value={props.userDetails.username} onChange={(e)=>props.updateDetails(e.target.value)}/>
            <input onBlur={handleUpdate2} name='password' value={props.userDetails.password} onChange={(e)=>props.updateDetails(e.target.value)}/>
            <button>Edit</button>
        </div>
    )
}
