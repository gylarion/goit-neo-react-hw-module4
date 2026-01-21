import { useEffect, useState } from "react";
import { fetchImages } from "./services/unsplash-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchImages(query, page);
        console.log(data);

        setImages((prev) =>
          page === 1 ? data.results : [...prev, ...data.results],
        );
      } catch {
        setError("Failed to load images");
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}

export default App;
