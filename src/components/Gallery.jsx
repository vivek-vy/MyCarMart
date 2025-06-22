
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export const Gallery = ({lightGalleryRef,images,onImageClick}) => {

  return (
    <> 
    
      <LightGallery
        onInit={(ref) => (lightGalleryRef.current = ref.instance)}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        dynamic
        dynamicEl={images}
      />

     {/* Grid Thumbnails */}
      <div className="gallery-thumbnails d-flex flex-wrap gap-3 justify-content-center">
        {images.map((img, index) => (
          <a
            key={index}
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              onImageClick(index);
            }}
          >
            <img
              src={img.thumb}
              alt={`Thumbnail ${index}`}
              className="rounded"
              style={{
                width: "285px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                cursor: "pointer",
              }}
            />
          </a>
        ))}
      </div>
    </>
  );
};
