import { useRouter } from 'next/router'
import Title from '../components/Title'
import List from '../components/List'
import Button from '../components/Button'
import BreedHeader from '../components/BreedHeader'

function Breed(props) {
    const router = useRouter()
    const { breed } = router.query
    console.log(props.pictures)
    return (
        <>
            <BreedHeader>
                <Title>{breed}</Title>
                <Button href="/breeds">Back to list of breeds</Button>
            </BreedHeader>
            <List>
                {props.pictures.map((picture) => (
                    <a href={picture}>
                        <img width="200" height="200" src={picture} />
                    </a>
                ))}
            </List>
        </>
    )
}

// Use when your CONTENT depends on external data
// Get static props { params.id } /dogs/1 = 1
export async function getStaticProps({ params }) {
    const res = await fetch(`https://dog.ceo/api/breed/${params.breed}/images`)
    const { message } = await res.json()
    return { props: { pictures: message } }
}

export async function getStaticPaths() {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const { message } = await res.json()
    const breeds = Object.keys(message).map((breed) => breed)
    const paths = breeds.map((breed) => ({
        params: { breed },
    }))

    return {
        paths,
        fallback: false, // See the "fallback" section below
    }
}

export default Breed
