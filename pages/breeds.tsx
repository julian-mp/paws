import styles from '../styles/Breeds.module.scss'

import Box from '../components/Box'

function Breeds(props) {
    return (
        <div className={styles.breeds}>
            {props.breeds.map((breed) => (
                <Box breed={breed} key={breed} />
            ))}
        </div>
    )
}

// Use when your CONTENT depends on external data
// Get static props { params.id } /dogs/1 = 1
export async function getStaticProps({ params }) {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const { message } = await res.json()
    const breeds = Object.keys(message).map((breed) => breed)
    return { props: { breeds } }
}

export default Breeds
