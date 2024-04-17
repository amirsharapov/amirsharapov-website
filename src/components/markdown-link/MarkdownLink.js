import { Link } from "react-router-dom"

export const MarkdownLink = ({ href, children }) => {
    if (href.startsWith('http')) {
        return (
            <a href={href} target="_blank">
                {children}
            </a>
        )
    } else {
        return (
            <Link to={href}>
                {children}
            </Link>
        )
    }
}