import React,{useState} from 'react'
import CommonForm from '../Common-form/CommonForm'
import { RegisterElements } from '../Config/ConfigIndex'
const initialState={
  name:"",
  email:"",
   password:""
}
const RegisterIndex = () => {
  const [formData,setFormData] = useState(initialState)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
    <CommonForm 
    formData={formData} 
    setFormData={setFormData} 
    formControls={RegisterElements} 
    buttonText={'Register'}
    handleSubmit={handleSubmit}
    />
    </>
  )
}

export default RegisterIndex