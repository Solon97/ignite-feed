import styles from "./Post.module.css";
import { PostHeader } from "./Post/Header";
import { PostContent } from './Post/Content';
import { PostFooter } from './Post/Footer';

export function Post({author, content, tags, publishedAt}) {
    return (
        <article className={styles.post}>
            <PostHeader author={author} publishedAt={publishedAt} />
            <PostContent content={content} tags={tags} />
            <PostFooter />
        </article>
    )
}