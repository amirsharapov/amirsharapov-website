export const Emoji = ({ label }) => {
    const lookup = {
        'phone-with-arrow': '📲',
    }
    
    return (
        <span>{lookup[label]}</span>
    )
}