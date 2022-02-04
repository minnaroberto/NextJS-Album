import AlbumItem from "./AlbumItem";

const AlbumList = ({ albums }) => {
  return (
    <>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </> 
  )
};

export default AlbumList;
