import styles from '../styles/Box.module.scss'

export default function Box({ breed }) {
    return (
        <a href={`/${breed}`}>
            <div className={styles.box}>{breed}</div>
        </a>
    )
}
