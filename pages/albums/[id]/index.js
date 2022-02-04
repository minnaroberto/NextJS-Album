import Photo from '../../../components/Photo'

const album = ({ album }) => {
    return (
        <>
            <h2>Album Title: {album.title}</h2>
            <h2>Album Number: {album.id}</h2>
            <Photo key={album.id} album={album}></Photo>
        </>
    )
};

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${context.params.id}`)

    const album = await res.json()

    return {
        props: {
            album
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)

    const albums = await res.json()

    const ids = albums.map(album => album.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}


export default album;
