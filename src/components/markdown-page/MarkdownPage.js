import { Breadcrumbs } from "../markdown-breadcrumbs/Breadcrumbs"
import { MarkdownText } from "../markdown-text/MarkdownText"

export const MarkdownPage = ({ markdown, breadcrumbs }) => {
    return (
        <div
            style={{
                display: 'grid',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    minWidth: 'min(680px, calc(100vw - 20px))',
                    maxWidth: '720px',
                }}
            >
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
                <MarkdownText
                    markdown={markdown}
                />
            </div>
        </div>
    )
}
