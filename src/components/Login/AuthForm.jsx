import { useState } from "react"
// import { login } from '@utils/helpers'
import { LogInFields } from '@components/Login/FormField'
import AuthInput from '@components/Login/AuthInput'
import AuthBtn from "@components/Login/AuthBtn"

export default function AuthForm() {
    const [loginFields, setLoginFields] = useState(LogInFields.map(field => ({ ...field, value: '' })))

    const handleChange = (e) => {
      const updatedFields = loginFields.map((field) =>
        field.id === e.target.id ? { ...field, value: e.target.value } : field
      );  
      setLoginFields(updatedFields);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await authenticateUser()
        if (response && response.status === 201) {
          console.log(response)
        }
    }

    const authenticateUser = async () => {
      const email = loginFields.find(field => field.name === 'email').value
      const password = loginFields.find(field => field.name === 'password').value
      const data = { email, password }
      return login(data)
    }

    return (
      <>
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
      </>
    )
}