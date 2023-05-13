import AuthHeader from "@components/Auth/AuthHeader"
import AuthForm from "@components/Auth/AuthForm"

export default function LogIn() {
    return (
        <>
            <AuthHeader
                heading="Login to your stash"
                text="Don't have an account? "
                linkText="Sign up now"
                linkUrl="#"
            />
            <AuthForm />
        </>
    )
}