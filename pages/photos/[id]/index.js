import Image from 'next/image'

const photo = ({ photo }) => {
    const src = `${photo.thumbnailUrl}`
  return (
  <div>
      <h3>Album Title: {photo.title}</h3>
      <h3>Album Number: {photo.albumId}</h3>
      <h3>Photo Title: {photo.title}</h3>
      <h3>Photo Number: {photo.id}</h3>
      <Image src={photo.thumbnailUrl} alt={photo.title} width={500} height={500}/>
  </div>
  )
};

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`)

    const photo = await res.json()

    return {
        props:{
            photo
        }
    }
}

export default photo;
