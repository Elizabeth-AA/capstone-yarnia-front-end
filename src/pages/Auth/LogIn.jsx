// statement of purpose
// login/sign up tabs
// direct to user stash page
import AuthHeader from "@components/Auth/AuthHeader"
import AuthForm from "@components/Auth/AuthForm"

export default function LogIn() {
    return (
        <>
            <AuthHeader
                heading="Login to your stash"
                text="Don't have an account? "
                linkText="Signup"
                linkUrl="/signup"
            />
            <AuthForm />
        </>
    )
}