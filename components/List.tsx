import styles from '../styles/List.module.scss'

export default function List({ children }) {
    return <div className={styles.list}>{children}</div>
}
