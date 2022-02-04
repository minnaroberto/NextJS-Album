import AlbumList from '../components/AlbumList'

export default function Home({ albums }) {
  return (
   <div>
      <AlbumList albums={albums}></AlbumList>
   </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
  const albums = await res.json()

  return {
    props: {
      albums
    }
  }
}
