import { useState } from "react"
import { SignUpFields } from '@components/Auth/FormFields'
import AuthInput from "@components/Auth/AuthInput"
import AuthBtn from '@components/Auth/AuthBtn'

export default function RegisterForm() {
    const [signupFields, setSignupFields] = useState(SignUpFields)

    const handleChange = (e) => {
      const updatedFields = signupFields.map((field) =>
        field.id === e.target.id ? { ...field, value: e.target.value } : field
      );  
      setSignupFields(updatedFields);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupFields)
        createUser()
    }

    const createUser = () => {
        // signup api integration
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