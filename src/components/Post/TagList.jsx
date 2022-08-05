export function PostTagList({ tags }) {
    if (!tags || tags.length == 0) {
        return
    }

    return (
        <p>
            {tags.map(tag => {
                return(<a key={tag} href="">{`#${tag}`}&nbsp; </a>)
            })}
        </p>
    )
}