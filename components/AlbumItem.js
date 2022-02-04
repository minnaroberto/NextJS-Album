import Link from 'next/link'

const AlbumItem = ({ album }) => {
  return ( 
    <Link href="/albums/[id]" as={`/albums/${album.id}`}>
      <a>
        <h4>{album.title}</h4>
      </a>
    </Link>
  )
};

export default AlbumItem;
