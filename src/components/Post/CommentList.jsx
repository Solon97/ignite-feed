import styles from "./Footer.module.css";

export function PostCommentList(props) {
    console.log(props.children)
    if (props.children.length === 0)
        return

    return (
        <div className={styles.commentList}>
            {props.children}
        </div>
    )
}