import styles from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
      <p>{image.slug}</p>
    </div>
  );
}

export default ImageCard;
