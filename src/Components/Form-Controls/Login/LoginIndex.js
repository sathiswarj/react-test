import React,{useState} from 'react'
import CommonForm from '../Common-form/CommonForm'
import { LoginElements } from '../Config/ConfigIndex'

const initialState={
   email:"",
    password:""
}
const LoginIndex = () => {
  const [formData,setFormData] = useState(initialState)
  // console.log(formData)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
    LoginIndex
    <CommonForm 
    formData={formData} 
    setFormData={setFormData} 
    formControls={LoginElements} 
    buttonText={'Login'}
    handleSubmit={handleSubmit}
    />
    </>
  )
}

export default LoginIndex