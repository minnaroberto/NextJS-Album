import styles from '../styles/Home.module.css'
import Photo from './Photo';

const Photos = ({ photos }) => {

  return (
    <>
    <div>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />
      ))}
    </div>
    </> 
  )
};

export default Photos;
