
export const Carousel = ({ images = [], onImageClick }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return <p>No images to display.</p>; // Optional placeholder
  }
const isMobile = window.innerWidth <= 576;
  return (
    <div
      id="galleryCarousel"
      className="carousel slide mb-5 "
      data-bs-ride="carousel"

    >
      <div className="carousel-inner "  >
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item carousel-item-overlay ${index === 0 ? "active" : ""}`}
            style={{ textAlign: "center",  }}
          >
            <img
              src={img.src}
              alt={`Slide ${index}`}
              className="d-block mx-auto"
              style={{
                height: isMobile ? "100%" : "520px",
                width: "100%",
                cursor: "pointer",
                borderRadius: "12px",
                objectFit: "cover",
              }}
              onClick={() => onImageClick(index)}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};
