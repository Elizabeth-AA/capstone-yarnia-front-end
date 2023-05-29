import { Link } from "react-router-dom"
import AuthImg from "@components/Auth/AuthImg"

export default function AuthHeader({ heading, text, linkText, linkUrl='#' }) {
    return (
        <div className="bg-primary pb-2">
            <div className="flex justify-center">
                <AuthImg />
            </div>
            <h2 className="mt-6 text-center text-accent card-header">
                {heading}
            </h2>
            <p className="mt-4 text-center text-sm text-neutral">
                {text} {' '}
                <Link to={linkUrl} className="font-medium text-secondary hover:text-accent">
                    {linkText}
                </Link>
            </p>
        </div>
    )
}