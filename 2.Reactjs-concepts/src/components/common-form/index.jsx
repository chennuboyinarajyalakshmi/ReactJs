import CommonInput from "../common-input";
function CommonForm({formControls=[],formData,setFormData}){

  const formTypes={
    INPUT:"input",
    SELECT:"select",
    TEXTAREA:"textarea"
  }

  function renderFormElement(getcurrentElement){
    let content =null;
    switch (getcurrentElement?.componentType) {
      case formTypes.INPUT:
           content= <CommonInput 
           label={getcurrentElement.label}
           name={getcurrentElement.name} 
           id={getcurrentElement.id}
           placeholder={getcurrentElement.placeholder}
           value={formData[getcurrentElement.name]}
           onChange={(event)=>{ setFormData(
        {
           ...formData, //destructiring the existing form data 
           [event.target.name]:event.target.value
        
        })
      }} />
            break;
    
      default:
        break;
    }
    return content;

  }
    return(
        <>
        <h4>common form</h4>
        <form>
            {
                formControls && formControls.length ?  formControls.map((singleFormElementItem)=>{renderFormElement(singleFormElementItem)}):null
            }
        </form>
        </>
    )
}

export default CommonForm