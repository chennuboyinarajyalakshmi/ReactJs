import {useForm}  from 'react-hook-form'

function ReactHookForm() {
    const {register,handleSubmit,formState:{errors},reset}=useForm()

    function onSubmitFormData(formData){
        console.log(formData)
        reset()

    }
  return (
    <>
    <h1>This is React Hook Form </h1>
    <form onSubmit={handleSubmit(onSubmitFormData)}>
        <div>
            <label >Email</label>
            <input {...register('email',{required:true})} name="email" type="email"  />
            {
            errors.email && errors.email.type==="required" ? 
            (<p styles={{color:'red', fontWeight:'bolder' , margin:'20px'}}>email is Required</p>)
            : null
        }
        </div>
        <div>
            <label>Password</label>
            <input {...register('password',{required:true,minLength:8})} name="password" type="password" />
        {
            errors.password && errors.password.type==="required" ? 
            (<p styles={{color:'red', fontWeight:'bolder' , margin:'20px'}}>Password is Required</p>)
            : null
        }
        {
            errors.password && errors.password.type==="minLength" ? 
            (<p styles={{color:'red', fontWeight:'bolder' , margin:'20px'}}>Password should be atleast 8 charecters</p>)
            : null
        }
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
    
  )
}

export default  ReactHookForm