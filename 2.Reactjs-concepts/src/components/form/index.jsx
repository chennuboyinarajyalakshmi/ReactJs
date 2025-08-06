import { useState } from "react"

function FormComponent(){
  const [nameValue,setNameValue]=useState("")
  const [emailValue,setEmailValue]=useState("")
  const [formData,setFormData]=useState({
    name:"",
    email:""
  })

  //handleing each input or each event indivuisyally by defining each usestate separtly
   //but it is not recoomend in the larget project i.e to create every time handle fucntion 

  function handleOnchangeName(event){
    // setNameValue(event.target.value)---not recommended way
    const {value}=event.target
    setNameValue(value)
  }

function handleOnchangeEmail(event){
    // setEmailValue(event.target.value)---not recommended way
    const {value}=event.target
    setEmailValue(value)
  }


// lets create common handle funtion to both usename nd email 
function handleOnchange(event){
    console.log(event)
    const {name,value}=event.target   // destruction the values from event.target method
    setFormData(
        {
           ...formData, //destructiring the existing form data 
           [name]:value  
        }
    ) 
}
  function handleSubmit(event){
    event.preventDefault()
    //console.log(nameValue,emailValue)   or  
    console.log(formData.name, formData.email) // both are same

  }

    return(
    <>
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
        name="name"
        id="name" 
       // value={nameValue}
       value={formData.name}
       placeholder="Enter your name here"
        type="text"
       // onChange={handleOnchangeName} 
        onChange={handleOnchange}
 
        />
        <input 
        name="email"
        id="email" 
        //value={emailValue}
        value={formData.email}
        placeholder="Enter your email here"
        type="text"
        //onChange={handleOnchangeEmail}  
        onChange={handleOnchange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    
    </>)
}

export default FormComponent