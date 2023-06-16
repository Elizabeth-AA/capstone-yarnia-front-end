import { useState } from "react"
import { SignUpFields } from '@components/Login/FormField'
import AuthInput from "@components/Login/AuthInput"
import AuthBtn from '@components/Login/AuthBtn'
import AuthHeader from "@components/Login/AuthHeader"
import { addUser } from '@utils/helpers'

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
        await addUser(data)
    }

    return (
      <>
        <AuthHeader
          heading="enter your details to sign up"
        />
        <div className="flex flex-wrap -mx-2 mt-2">
          {signupFields.map((field, index) =>
            <div key={index} className="w-full px-2 mb-1">
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
            </div>
          )}
        </div>
        <AuthBtn handleSubmit={handleSubmit} text="Signup" />
      </>
    )
}