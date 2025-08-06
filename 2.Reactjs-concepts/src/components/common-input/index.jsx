function CommonInput({label,onChange,name,id,type,value,placeholder}){
  return(
    <>
    <div>
        {/* props we are go ti get from parent components */} 
        <label htmlFor={name}>{label}</label>
        <input 
        //props we are going to pass to  child componnets
        name={name}
        id={id}
        placeholder={placeholder || 'enter value here'}  
        value={value} 
        type={type || 'text'}
        onChange={onChange} />
    </div>
    </>
  )
}


export default CommonInput