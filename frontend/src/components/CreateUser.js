import React, {isValidElement, useState} from 'react';
import axios from 'axios'


export default function CreateUser({usersDB}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

const handleSubmit = (e)=>{
    e.preventDefault();

    axios.post('http://localhost:5000/api/new-user', {username, password, imageUrl})
    .then(res=>{
        usersDB();
        console.log(res.data)
    })
    .catch(err=>{
        console.log('Somethin went wrong', err)
    });

    
    setUsername('');
    setPassword('');

}


///////////JUST ONE PHOTO/////////ç
const handleFileUpload = e => {
     const uploadData = new FormData();
    uploadData.append('imageUrl', e.target.files[0]);

        axios.post('http://localhost:5000/api/upload', uploadData)
    .then(response=>{
        console.log(response)
        setImageUrl(response.data.secure_url)
    })
    .catch(err => {
            console.log('Error while uploading the file: ', err);
          });

}



    return (
        <div>
            <h2>Create user</h2>
            <form onSubmit={handleSubmit} >
                <input type='text' value={username} placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <input name='imageUrl' type='file'  placeholder="Add photo" onChange={e=>handleFileUpload(e)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
