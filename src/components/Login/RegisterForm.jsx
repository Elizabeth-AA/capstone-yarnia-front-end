import { useState } from "react"
import { SignUpFields } from '@components/Login/FormField'
import AuthInput from "@components/Login/AuthInput"
import AuthBtn from '@components/Login/AuthBtn'
// import { signup } from '@utils/helpers.js'

export default function RegisterForm() {
    const [signupFields, setSignupFields] = useState(SignUpFields)

    const handleChange = (e) => {
      const fieldIndex = signupFields.findIndex((field) => field.id === e.target.id)
      const updatedFields = [...signupFields]
      updatedFields[fieldIndex] = { ...updatedFields[fieldIndex], value: e.target.value }
      setSignupFields(updatedFields);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupFields)
        createUser()
    }

    const createUser = async () => {
        const data = {}
        for (let i = 0; i < signupFields.length; i++) {
          data[signupFields[i].id] = signupFields[i].value;
        }
        await signup(data)
    }

    return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {signupFields.map((field, index) =>
            <AuthInput
              key={index}
              handleChange={handleChange}
              value={signupFields[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          )}
        </div>
        <AuthBtn handleSubmit={handleSubmit} text="Signup" />
      </form>
    )
}