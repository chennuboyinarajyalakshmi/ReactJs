import CommonInput from "../common-input";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({ formControls = [], buttonText, formData, setFormData, onSubmit }) {
  
  function renderFormElements(getCurrentFormControl) {
    let element = null;

    switch (getCurrentFormControl.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={formData[getCurrentFormControl.name] || ""}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <CommonInput
            type={getCurrentFormControl.type}
            placeholder={getCurrentFormControl.placeholder}
            value={formData[getCurrentFormControl.name] || ""}
            name={getCurrentFormControl.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControl.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      {formControls.map((singleFormControl, index) => (
        <div key={index}>{renderFormElements(singleFormControl)}</div>
      ))}

      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}

export default CommonForm;
