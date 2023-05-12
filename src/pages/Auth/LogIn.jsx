// statement of purpose
// login/sign up tabs
// direct to user stash page
import AuthHeader from "@components/Auth/AuthHeader";

export default function LogIn() {
    return (
        <>
            <AuthHeader
                heading="Login to your stash"
                text="Don't have an account? "
                linkText="Signup"
                linkUrl="/signup"
            />
        </>
    )
}