import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();

    if (!value) {
      toast.error("Enter search text");
      return;
    }

    onSubmit(value);
    e.target.reset();
  };

  return (
    <header className={styles.searchHeader}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
