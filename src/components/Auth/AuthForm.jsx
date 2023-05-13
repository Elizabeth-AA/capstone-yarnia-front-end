import { useState } from "react"
import { LogInFields } from '@components/Auth/FormFields'
import AuthInput from '@components/Auth/AuthInput'
import AuthBtn from "@components/Auth/AuthBtn"

export default function AuthForm() {
    const [loginFields, setLoginFields] = useState(LogInFields)

    const handleChange = (e) => {
      const updatedFields = loginFields.map((field) =>
        field.id === e.target.id ? { ...field, value: e.target.value } : field
      );  
      setLoginFields(updatedFields);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser()
    }

    const authenticateUser = () => {
        // login api integration
    }

    return (
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
          {loginFields.map((field, index) =>
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
          )}
        </div>
        <AuthBtn handleSubmit={handleSubmit} text="Login" />
      </form>
    )
}