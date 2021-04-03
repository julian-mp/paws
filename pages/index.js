import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'

export default function Home() {
    return (
        <div className={styles.container}>
            <p>
                Welcome to Paws, a stupid website which was the output of a few
                hours hacking with{' '}
                <a href="https://nextjs.org/" className="link">
                    Next.js
                </a>
                .
            </p>
            <p>
                Here you can find dog pictures of your favourite breeds. Click
                the button below to view all the breeds.
            </p>
            <p>Source code for this project can be found in the footer!</p>
            <Button href="/breeds">Take me to the dog pictures</Button>
        </div>
    )
}
