import { Link } from "react-router-dom"
import Logo from "@components/Header/Logo"

export default function AuthHeader({ heading, text, linkText, linkUrl='#' }) {
    return (
        <div className="card mb-10 bg-primary">
            <div className="flex justify-center">
                <Logo />
            </div>
            <h2 className="mt-6 text-center mt-6 text-center text-3xl font-extrabold page-header">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-accent mt-5">
                {text} {' '}
                <Link to={linkUrl} className="font-medium text-accent hover:text-secondary">
                    {linkText}
                </Link>
            </p>
        </div>
    )
}