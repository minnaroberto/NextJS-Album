import Link from 'next/link'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css'

const photos = ({ photos }) => {
  console.log(photos)
  return (
    <div className={styles.ul}>
            <h2>List of Photos</h2>
            {photos.map(photo => (
                <li key={photo.id} style={{padding: '5px'}} className={styles.card}>
                    <Link href="/photos/[id]" as={`/photos/${photo.id}`}>
                        <a>
                            <h3>{photo.title}</h3>
                            <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150}/>
                        </a>
                    </Link>
                </li>
            ))}
    </div>
  )

};

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${context.params.id}/photos`)

    const photos = await res.json()

    return {
        props:{
            photos
        }
    }
}

export default photos;
