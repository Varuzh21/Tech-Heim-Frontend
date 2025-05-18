import Link from "next/link";

const AuthLink = () => {
    return (
        <div className="header__auth-link button">
            <Link href="/">Login</Link>
            <span> / </span>
            <Link href="/">Sign Up</Link>
        </div>
    )
}

export default AuthLink;