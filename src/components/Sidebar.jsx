import { Avatar } from "./Avatar";
import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";
const coverUrl = "https://images.unsplash.com/photo-1582568055643-bf4cac69cc24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src={coverUrl}
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Solon97.png" />
                <strong>Solon Barbosa</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}