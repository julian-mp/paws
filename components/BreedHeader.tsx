import styles from '../styles/BreedHeader.module.scss'

export default function Button({ children }) {
    return <div className={styles.breedHeader}>{children}</div>
}
