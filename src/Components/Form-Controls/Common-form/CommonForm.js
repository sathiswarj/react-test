import React from 'react'
import CommonInput from '../Common-input/CommonInput';

const formTypes = {
  INPUT : "input",
  SELECT : "select",
  TEXTAREA : "textarea"
}

const CommonForm = ({ formControls = [], formData, setFormData,buttonText,handleSubmit }) => {

  const renderFormElement = (getFormType) => {
    let content = null;

    switch (getFormType?.componentType) {
      case formTypes.INPUT:
        content = <CommonInput
          lable={getFormType.lable}
          id={getFormType.id}
          type={getFormType.type}
          placeholder={getFormType.placeholder}
          name={getFormType.name}
          value={formData[getFormType.name]}
          onChange={(e) => setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })}
        />
        break;

      default:
        content = <CommonInput
        lable={getFormType.lable}
        id={getFormType.id}
        type={getFormType.type}
        placeholder={getFormType.placeholder}
        name={getFormType.name}
        value={formData[getFormType.name]}
        onChange={(e) => setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })}
      />
        break;
    }
    return content;
  }

  return (
    <form onSubmit={handleSubmit}>
      {
        formControls?.length ? formControls.map((singleForm) => renderFormElement(singleForm)) : 'null'
      }
      <div style={{marginTop:"12px"}}>
             <button type='submit'>{buttonText  || "Submit"}</button>
      </div>
    </form>
  )
}

export default CommonForm