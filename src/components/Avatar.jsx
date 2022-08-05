import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
    const border = hasBorder ? styles.border : ""

    return <img className={`${styles.avatar} ${border}`} src={src}/>
}