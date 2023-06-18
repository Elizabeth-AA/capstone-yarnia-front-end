import { useState } from "react"
import { authUser, addUser } from "@utils/helpers"
import { LogInFields, SignUpFields } from '@components/Input/FormFields'
import AuthInput from '@components/Input/AuthInput'
import AuthBtn from "@components/Buttons/AuthBtn"
import AuthHeader from "@components/Login/AuthHeader"

export default function AuthForm({ formType }) {

  const formFields = formType === "login" ? LogInFields : SignUpFields; 

  const [fields, setFields] = useState(formFields.map((field) => ({ ...field, value: "" }))
  )

  const handleChange = (e) => {
    const fieldId = e.target.id;
    const fieldValue = e.target.value;
  
    setFields((prevFields) =>
      prevFields.map((field) => (field.id === fieldId ? { ...field, value: fieldValue } : field))
    );
  };

  const isFormValid = !fields.some(field => field.value === "");

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (formType === "login") {
        const response = await authenticateUser();
        if (response && response.status === 201) {
          console.log(response)
        }
      } else if (formType === "signup") {
        await createUser()
      }
  }

  const authenticateUser = async () => {
    const email = fields.find(field => field.name === 'email').value
    const password = fields.find(field => field.name === 'password').value
    const data = { email, password }
    return await authUser(data)
  }

  const createUser = async () => {
    const data = fields.reduce((acc, field) => {
      acc[field.id] = field.value;
      return acc;
    }, {})
    await addUser(data)
  }

    return (
      <>
      <AuthHeader
        heading={formType === "login" ? "log in to your account" : "enter your details to sign up"}
      />
        <div className="flex flex-wrap -mx-2 mt-2">
          {fields.map((field, index) =>
            <div key={index} className="w-full px-2 mb-1">
            <AuthInput
              key={index}
              handleChange={handleChange}
              value={field.value}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
            </div>
          )}
        </div>
        <AuthBtn handleSubmit={handleSubmit} isActive={!isFormValid} text={formType === "login" ? "Login" : "Signup"} />
      </>
    )
}