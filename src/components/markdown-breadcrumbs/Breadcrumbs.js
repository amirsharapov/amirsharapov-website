import { MarkdownText } from "../markdown-text/MarkdownText"

export const Breadcrumbs = ({ breadcrumbs }) => {
    if (!breadcrumbs) {
        return null
    }

    const markdownParts = []

    for (const part of breadcrumbs) {
        const { path, title } = part

        if (!path) {
            markdownParts.push(title)
        } else {
            markdownParts.push(`[${title}](${path})`)
        }
    }

    const markdown = markdownParts.join(' / ')
    
    return (
        <MarkdownText markdown={markdown}/>
    )
}