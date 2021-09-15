import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { Marginer } from "../Login&Auth/marginer";
import {
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
    
  } from "../Login&Auth/common"
import './Profile.scss'


const Profile:React.FC =()=>{
    const [updateData, setUpdateData] = useState({
        name:"",
        email:"",
        password:"",
        avatar:"",
      
      });
    const dispatch = useDispatch();
      const [repetPassword, setRepetPassword] = useState({
    
        password:""
      
      });
      
    function handleSignupClick(event:any) {
        if (repetPassword.password===updateData.password){
        event.preventDefault();
        
        
        }  else{
            alert('Both passwords are not matching')
          
          }
          
        
       
      }
      
   
    return(
    <div className="profile"> Profile
       <BoxContainer>
      <FormContainer>
        <Input type="text" value ={updateData.name} onChange={(event)=>setUpdateData({...updateData, name: event.target.value})} placeholder="Full Name" />
        <Input type="email" value ={updateData.email} onChange={(event)=>setUpdateData({...updateData, email: event.target.value})} placeholder="Email" />
        <Input type="password" value ={updateData.password} onChange={(event)=>setUpdateData({...updateData, password: event.target.value})} placeholder="Password" />
        <Input type="avatar"  value={repetPassword.password} onChange={(event)=>setRepetPassword({...repetPassword, password: event.target.value})} placeholder="Confirm Password" />
        <Input type="file"   />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleSignupClick} type="submit">Update</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
     
    </BoxContainer>
    </div>
    )
}
export default Profile