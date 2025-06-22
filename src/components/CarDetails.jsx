import { useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { carsContext } from "./CarsData";
import { Carousel } from "./Carousel";
import { Gallery } from "./Gallery";
import "../styles/carDetails.css"

export const CarDetails = () => {
  const { id } = useParams();
  const { cars } = useContext(carsContext);

  console.log("cardata", cars);
  const selectedCar = cars.find((car) => car.id.toString() === id);
  console.log("selected car", selectedCar);

  const lightGalleryRef = useRef(null);

  const images = [
    {
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      thumb:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      thumb:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      src: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
      thumb:
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
    {
      src: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      thumb:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=200",
    },{
      src: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg",
      thumb:
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=200",
    },
  ];

  const openGalleryAtIndex = (index) => {
    lightGalleryRef.current.openGallery(index);
  };

  return (
    <div className="main" style={{ backgroundColor: "#f8fafc" }}>
      <div className=" container p-0 py-sm-5 ">
        {" "}
        <nav className="mb-4 fs-5 mt-4 mt-sm-0 text-sm-start text-center fw-semibold">
          <Link to={"/"}>Car for 12/16</Link>
          <span> / </span> <Link to={`/carDetails/id}`}>Car Details</Link>
        </nav>
        <div className="details  bg-white rounded shadow-sm p-4 px-3 ">
          <div className="d-flex flex-column flex-lg-row  gap-lg-5 ">
            <div className="col-12 col-lg-6">
              {" "}
              <div className="car-images row g-3 car-gallery rounded-4   ">
                {images.length > 0 && (
                  <Carousel images={images} onImageClick={openGalleryAtIndex} />
                )}
              </div>
            </div>
            <div className="car-content mt-2 fs-5 ">
              <h1 className="fw-bold fs-3"> Hundai Accent Base(2012) </h1>
              <div>
                {" "}
                <span className="fs-5">KMHCN3BC2BU206046</span>
              </div>
              <p className="mb-2 ">
                <i className="bi bi-speedometer2"></i>{" "}
                <strong>Mileage: </strong> <span> 235,296 km</span>
              </p>
              <p className="mb-2">
                <i className="bi bi-gear"></i> <strong>Engine Size:</strong>
                <span>1.6 liters 4 cyl</span>
              </p>
              <p className="mb-2">
                <i className="bi bi-arrows-move"></i>{" "}
                <strong>Traction: </strong>
                <span> FWD </span>
              </p>
              <p className="mb-2">
                <i className="bi bi-shuffle"></i> <strong>Transmission:</strong>{" "}
                <span>Automatic</span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-wrench"></i> <strong>Brand: </strong>
                <span className="px-3 text-bg-success"> Salvage Vehicle</span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-key"></i> <strong>Keys: </strong>
                <span>1</span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-fuel-pump"></i> <strong>Fuel Type: </strong>
                <span> Gas</span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-car-front-fill"></i>{" "}
                <strong> Type of Wreck: </strong>
                <span> Collision </span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-calendar-event"></i>{" "}
                <strong> Auction Date: </strong>
                <span> 2026-06-09 12:00:00 </span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-cash-stack"></i>{" "}
                <strong> ACV (Actual Cash Value): </strong>
                <span></span>
              </p>{" "}
              <p className="mb-2">
                <i className="bi bi-info-circle"></i>{" "}
                <strong>Description:</strong>
                <span></span>
              </p>{" "}
            </div>
          </div>
          <div className="gallary w-100 col-12 col-sm-2 pe-5">
            <div className="d-flex justify-content-between mt-5  mb-4  ">
              {" "}
              <h4 className="fs-3">Additional Images</h4>
              <Link className="btn btn-primary mb-3">
                <i className="bi bi-download"></i>
              </Link>
            </div>
            {/* <div className="image-container d-flex w-100 gap-4 pe-3 flex-wrap">
              <div
                className=" photo border border-secondary  rounded-2 "
                style={{ width: "284px", height: "200px " }}
              >
                <img src="" alt="img1" />
              </div>
              <div
                className=" photo border border-secondary  rounded-2 "
                style={{ width: "284px", height: "200px " }}
              >
                <img src="" alt="img2" />
              </div>
              <div
                className=" photo border border-secondary  rounded-2 "
                style={{ width: "284px", height: "200px " }}
              >
                <img src="" alt="img3" />
              </div>
              <div
                className=" photo border border-secondary rounded-2 "
                style={{ width: "284px", height: "200px " }}
              >
                <img src="" alt="img4" />
              </div>{" "}
              <div
                className=" photo border border-secondary rounded-2 "
                style={{ width: "284px", height: "200px " }}
              >
                <img src="" alt="img5" />
              </div>
            </div> */}
          </div>
          <div className="galleryimg ">
            <Gallery
              lightGalleryRef={lightGalleryRef}
              images={images}
              onImageClick={openGalleryAtIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
