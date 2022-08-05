import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)
    
    const handleCommentDelete = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount(state => state+1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rodrigobranas.png" />
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo Branas</strong>
                            <time title="11 de Maio às 08:15h">Cerca de 1h</time>
                        </div>

                        <button onClick={handleCommentDelete} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}