import { useState } from 'react'
import { apiInstance } from '@services/axios'
import { authUser, addUser } from '@utils/helpers'
import { LogInFields, SignUpFields } from '@components/Input/FormFields'
import AuthInput from '@components/Input/AuthInput'
import AuthBtn from '@components/Buttons/AuthBtn'
import AuthHeader from '@components/Login/AuthHeader'

export default function AuthForm({ formType, closeModal, handleSuccess }) {

  const formFields = formType === 'login' ? LogInFields : SignUpFields

  const [fields, setFields] = useState(formFields.map((field) => ({ ...field, value: '' })))

  const handleChange = (e) => {
    const fieldId = e.target.id
    const fieldValue = e.target.value

    setFields((prevFields) =>
      prevFields.map((field) => (field.id === fieldId ? { ...field, value: fieldValue } : field))
    )
  }

  const isFormValid = !fields.some((field) => field.value === '')

  const clearFields = () => {
    setFields((prevFields) => prevFields.map((field) => ({ ...field, value: '' })))
  }

  const handleSubmit = async (e) => {
    if (formType === 'login') {
      const response = await authenticateUser()
      if (response) {
        const userId = response.userId
        clearFields()
        closeModal()
        handleSuccess(userId)
      }
    } else if (formType === 'signup') {
      const response = await createUser()
      if (response) {
        const userId = response.userId
        clearFields()
        closeModal()
        handleSuccess(userId)
      }
    }
  }

  const authenticateUser = async () => {
    const email = fields.find((field) => field.name === 'email').value
    const password = fields.find((field) => field.name === 'password').value
    const data = { email, password }
    
    try {
      const response = await authUser(data)
      if (response) {
        const {accessToken, refreshToken, userId} = response
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('userId', userId)
        apiInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        return { accessToken, refreshToken, userId }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const createUser = async () => {
    try {
      const data = {
        username: fields.find((field) => field.name === 'username').value,
        email_address: fields.find((field) => field.name === 'email').value,
        password: fields.find((field) => field.name === 'password').value
      }
      await addUser(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <AuthHeader heading={formType === 'login' ? 'log in to your account' : 'enter your details to sign up'} />
      <div className="-mx-2 mt-2 flex flex-wrap">
        {fields.map((field, index) => (
          <div key={index} className="mb-1 w-full px-2">
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
        ))}
      </div>
      <AuthBtn
        handleSubmit={handleSubmit}
        isActive={!isFormValid}
        text={formType === 'login' ? 'Login' : 'Signup'}
        clearFields={clearFields}
        closeModal={closeModal}
      />
    </>
  )
}
