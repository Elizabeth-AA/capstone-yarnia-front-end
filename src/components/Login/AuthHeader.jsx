import AuthImg from "@components/Login/AuthImg"

export default function AuthHeader({ heading }) {
    return (
        <div className="pb-2">
            <div className="flex justify-center">
                <AuthImg />
            </div>
            <h2 className="mt-4 text-center text-lg text-secondary">
                {heading}
            </h2>
        </div>
    )
}