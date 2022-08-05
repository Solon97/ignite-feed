import { PostTagList } from "./TagList";
import styles from "./Content.module.css";

export function PostContent({content, tags}) {
    return (
        <section className={styles.content}>
            {content.map(line => {
                const lineKey = `${line.content}-${line.type}`

                if(line.type === 'paragraph')
                    return <p key={lineKey}>{line.content}</p>

                if(line.type === 'link')
                    return <p key={lineKey}><a href="">{line.content}</a></p>
            })}
            
            
            <PostTagList tags={tags} />
        </section>
    )
}