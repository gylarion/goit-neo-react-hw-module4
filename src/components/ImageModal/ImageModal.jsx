import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose }) {
  return (
    <Modal
      className={styles.modal}
      isOpen={true}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
}

export default ImageModal;
