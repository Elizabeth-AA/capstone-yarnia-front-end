import { useState } from "react"
import FormFields from '@components/Auth/FormFields'
import AuthInput from '@components/Auth/AuthInput'

export default function AuthForm() {
    const fields = useState(FormFields)
    const [fieldsState, setFieldsState] = useState(
        fields.reduce((acc, field) => {
            acc[field.id] = "";
            return acc;
          }, {})
    );

    const handleChange = (e) => {
      setFieldsState({...fieldsState, [e.target.id]: e.target.value});
    };
  
    return (
      <form className="mt-8 space-y-6">
        <div className="-space-y-px">
          {fields.map(field =>
            <AuthInput
              key={field.id}
              handleChange={handleChange}
              value={fieldsState[field.id]}
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
      </form>
    )
}