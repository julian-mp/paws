import styles from '../styles/Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            created by{' '}
            <a href="https://github.com/julian-mp" className="link">
                julian
            </a>{' '}
            powered by{' '}
            <a href="https://dog.ceo/dog-api/" className="link">
                dog api
            </a>
        </footer>
    )
}
