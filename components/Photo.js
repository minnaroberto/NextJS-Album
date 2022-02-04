import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Photo = ({ album }) => {
  return (
    <Link href="/albums/[id]/photos" as={`/albums/${album.id}/photos`}>
        <a>
            <h3 className={styles.h3}>See list of Album {album.id} photos here</h3>
        </a>
    </Link> 
  )
};

export default Photo;
