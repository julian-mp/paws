import styles from '../styles/Header.module.scss'
import Logo from './Logo'

export default function Header(props) {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}
