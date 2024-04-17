import Markdown from "markdown-to-jsx"
import { MarkdownLink } from "../markdown-link/MarkdownLink"

export const MarkdownText = ({ markdown }) => {
    const options = {
        overrides: {
            a: {
                component: MarkdownLink
            }
        }
    }

    return (
        <Markdown options={options}>
            {markdown}
        </Markdown>
    )
}