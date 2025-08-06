import { registerFormElements } from "../../config"
import CommonForm from "../common-form"
import { useState } from "react"

function RegisterComponent(){
      const intialState={
         email:"",
         password:""
         }
         const [registerFormData,setRegisterFormData]=useState(intialState)
    return(
        <>
        <h3>Register Page</h3>
        <CommonForm formControls={registerFormElements}  formData={registerFormData}  setFormData={setRegisterFormData}/>
        </>
    )
}

export default RegisterComponent