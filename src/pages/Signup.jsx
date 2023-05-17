import AuthHeader from "@components/Auth/AuthHeader"
import RegisterForm from "@components/Auth/RegisterForm"

export default function SignUp() {
    return (
        <>
            <AuthHeader
                heading="Sign up to find inspiration"
                text="Already have an account?"
                linkText="Login"
                linkUrl="#"
            />
            <RegisterForm />
        </>
    )
}