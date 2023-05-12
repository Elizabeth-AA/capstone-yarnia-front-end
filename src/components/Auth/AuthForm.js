import { useState } from "react"
import LogInFields from '@components/Auth/FormFields'
import AuthInput from '@components/Auth/AuthInput'
import AuthBtn from "@components/Auth/AuthBtn"

export default function AuthForm() {
    const fields = useState(LogInFields)
    const [loginFields, setLoginFields] = useState(
        fields.reduce((acc, field) => {
            acc[field.id] = "";
            return acc;
          }, {})
    );

    const handleChange = (e) => {
        setLoginFields({...loginFields, [e.target.id]: e.target.value});
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
          {fields.map(field =>
            <AuthInput
              key={field.id}
              handleChange={handleChange}
              value={loginFields[field.id]}
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