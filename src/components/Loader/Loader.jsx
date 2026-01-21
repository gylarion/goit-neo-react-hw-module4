import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ClipLoader size={40} />
    </div>
  );
}

export default Loader;
