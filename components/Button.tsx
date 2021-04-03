import styles from '../styles/Button.module.scss'

export default function Button({ href, children }) {
    return (
        <a href={href} className={styles.button}>
            {children}
        </a>
    )
}
