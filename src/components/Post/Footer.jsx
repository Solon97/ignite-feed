import { useState } from "react";
import { PostCommentList } from "./CommentList";
import { Comment } from "./Comment";
import styles from "./Footer.module.css";

export function PostFooter() {
    const [commentList, setCommentList] = useState([]);
    const [newComment, setNewComment] = useState({ content: "" })
    const isNewCommentEmpty = newComment.content.length === 0

    const handleCrateNewComment = () => {
        event.preventDefault()

        setCommentList(commentList => [...commentList, newComment])

        setNewComment({ content: "" });
    }

    const handleNewCommentChange = () => {
        const comment = {
            content: event.target.value
        }
        setNewComment(comment);
    }

    const deleteComment = (commentToDelete) => {
        setCommentList(commentList =>
            commentList.filter(comment => comment.content != commentToDelete))
    }

    return (
        <footer>
            <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newComment.content}
                    onChange={handleNewCommentChange}
                    required
                />
                <div className={styles.buttonWrapper}>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </div>
            </form>

            <PostCommentList>
                {commentList.map(({ author, content, date, applause }) => (
                    <Comment
                        key={content}
                        author={author}
                        content={content}
                        date={date}
                        applause={applause}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </PostCommentList>
        </footer>
    )
}