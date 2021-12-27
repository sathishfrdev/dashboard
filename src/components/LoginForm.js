import React,{useState} from 'react'


function LoginForm({Login,error}) {

    const [details,setDetails]=useState({name:"",email:"",password:""})
    
    const submitHandler=e=>{
    e.preventDefault()
    
    Login(details)
    
    }
    return (
<div>






</div>
    );
    }
export default LoginForm