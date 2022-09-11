import React from 'react'
import './UserList.css'
import {useState} from 'react'
import axios from 'axios'

function UserList() {
  const [name ,setname] =useState('');
  const [Description ,setDescription] =useState('');
  const [Location ,setLocation] =useState('');

  function oncreatepost(e){
    e.preventDefault()
  const data ={
    name,
    Description,
    Location
  };

    
  axios.post(`http://localhost:5000/add`,
  data,
  )
  .then((response)=>{
  console.log(response);
  })
}
  console.log(oncreatepost,"hhh")
  return ( 
    
    <div className='user_list'>
        <h3 className="user_job_creation">User Job Creation</h3>
        <form action="" className='Job_creation' onSubmit={oncreatepost}>
            <label htmlFor="" className='form_labels'>Job Name</label>
            <input type='text' value= {name} onChange={(e) =>setname(e.target.value)} placeholder='Job Name'/>
            <label htmlFor="" className='form_labels'>Job Description</label>
            <textarea name="textarea" value= {Description} onChange={(e) =>setDescription(e.target.value)} id="" cols="30" rows="10" placeholder='Job Description'></textarea>
            <label htmlFor="" className='form_labels'>Location</label>
            <input type="text" value= {Location}  onChange={(e) =>setLocation(e.target.value)}  placeholder='Job Location'/>
            <button className='update_button' >Update</button>
        </form>
        
    </div>
  )
}

export default UserList