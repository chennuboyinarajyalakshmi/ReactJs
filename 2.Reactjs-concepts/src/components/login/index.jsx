import { useState } from "react"
import { loginFormElements } from "../../config"
import CommonForm from "../common-form"

function LoginComponent(){
    const intialState={
    email:"",
    password:""
    }
    const [loginFormData,setLoginFormData]=useState(intialState)
    return(
        <>
        <h3>Login Page</h3>
        <CommonForm formControls={loginFormElements} formData={loginFormData} setFormData={setLoginFormData}/>
        </>
    )
}

export default LoginComponent