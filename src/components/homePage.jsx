import { Link } from "react-router-dom";
import carBg from "../assets/images/car-bg.jpg";
import "../styles/home.css";
import { useContext, useEffect, useState } from "react";

import { Filters } from "./Filters";

import { Banner } from "./Banner";
import RangeSlider from "./RangeSlider";
import { carsContext } from "./CarsData";
import { LoaderSpinner } from "./Loader";
import { Pagination } from "react-bootstrap";

const HomePage = () => {
  // open new tab
  const openNewTab = (id) => {
    window.open(`/carDetails/${id}`, "_blank");
  };

  const { cars, loader, setLoader } = useContext(carsContext);

  const [displayCars, setDisplayCars] = useState([...cars]);
  //  console.log("dis", displayCars);

  const [searchCar, setSearchCar] = useState("");

  const [filteredCar, setFilteredCar] = useState([...cars]);

  // sort filter
  const [sortedCars, setSortedCars] = useState([...cars]);
  const [selectedSort, setSelectedSort] = useState("");

  // all filters ============================================= ------>

  const [selectedMake, setSelectedMake] = useState("");

  const [selectedModel, setSelectedModel] = useState("");

  const [selectedEngine, setSelectedEngine] = useState("");

  const [selectedTransmission, setSelectedTransmission] = useState("");

  const [selectedTraction, setSelectedTraction] = useState("");

  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedKeys, setSelectedKeys] = useState("");

  // ----------

  const [odometerRange, setOdometerRange] = useState([]);
  //  console.log("odometer",odometer);

  const [yearRange, setYearRange] = useState([]);
  // console.log("year",yearRange);

  const [odometerValue, setOdometerValue] = useState([0, 300000]);
  const [yearValue, setYearValue] = useState([1965, 2035]);

  const [selectedDate, setSelectedDate] = useState("");

  const [allFilter, setAllFilter] = useState([...filteredCar]);

  // ----------  pagination  --- -->
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // console.log("pagin",itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // -------------------------------------------------------------->

  useEffect(() => {
    // console.log(sortedCars);
    setFilteredCar(sortedCars);
  }, [sortedCars]);

  const sortBy = [
    "Auction Date:Sooner First",
    "Auction Date:Oldest First",
    "Year : Younger First",
    "Year : Older First",
    "Vehical Name : A to Z",
    "Vehical Name : Z to A",
    "Brand : A to Z",
    "Brand : Z to A",
  ];

  const makeFilter = [...new Set(cars.map((car) => car.make))];
  const modelFilter = [...new Set(cars.map((car) => car.model))];
  const keysFilter = [...new Set(cars.map((car) => car.keys))];
  const brandFilter = [...new Set(cars.map((car) => car.brand))];
  const tractionFilter = [...new Set(cars.map((car) => car.traction))];
  const transmissionFilter = [...new Set(cars.map((car) => car.transmission))];
  const engineSizeFilter = [...new Set(cars.map((car) => car.engineSize))];

  // search btn function

  const handleSearchBtn = () => {
    setLoader(true);
    setTimeout(() => {
      let search = cars.filter((car) => {
        return car.model.toLowerCase().includes(searchCar.trim().toLowerCase());
      });
      setFilteredCar(search);
      setSearchCar("");
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    setDisplayCars(filteredCar);
  }, [filteredCar]);

  useEffect(() => {
    setDisplayCars(allFilter);
  }, [allFilter]);

  // sorting function --------------------------------------- >
  useEffect(() => {
    handleSortChange(selectedSort);
  }, [selectedSort, cars]);

  // Handle sort change

  const handleSortChange = (option) => {
    setLoader(true);
    let sorted = [...filteredCar];

    switch (option) {
      case "Auction Date:Sooner First":
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "Auction Date:Oldest First":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Year : Younger First":
        sorted.sort((a, b) => b.year - a.year);

        break;
      case "Year : Older First":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "Vehical Name : A to Z":
        sorted.sort((a, b) => a.model.localeCompare(b.model));
        break;
      case "Vehical Name : Z to A":
        sorted.sort((a, b) => b.model.localeCompare(a.model));
        break;
      case "Brand : A to Z":
        sorted.sort((a, b) => a.make.localeCompare(b.make));
        break;
      case "Brand : Z to A":
        sorted.sort((a, b) => b.make.localeCompare(a.make));
        break;
      default:
        sorted = [...cars];
    }

    setTimeout(() => {
      setSortedCars(sorted);
      setLoader(false);
    }, 400);
  };

  // all filters ------------------------------------------------  -->

  const applyAllfilters = () => {
    setLoader(true);

    const result = cars.filter((item) => {
      return (
        (!selectedMake ||
          (selectedMake === "all" && item.make) ||
          item.make.toLowerCase() === selectedMake.toLowerCase()) &&
        (!selectedModel ||
          (selectedModel === "all" && item.model) ||
          item.model.toLowerCase() === selectedModel.toLowerCase()) &&
        (!selectedEngine ||
          (selectedEngine === "all" && item.engineSize) ||
          item.engineSize.toLowerCase() === selectedEngine.toLowerCase()) &&
        (!selectedTransmission ||
          (selectedTransmission === "all" && item.transmission) ||
          item.transmission.toLowerCase() ===
            selectedTransmission.toLowerCase()) &&
        (!selectedTraction ||
          (selectedTraction === "all" && item.traction) ||
          item.traction.toLowerCase() === selectedTraction.toLowerCase()) &&
        (!selectedBrand ||
          (selectedBrand === "all" && item.brand) ||
          item.brand.toLowerCase() === selectedBrand.toLowerCase()) &&
        (!selectedKeys ||
          (selectedKeys === "all" && item.keys) ||
          item.keys.toLowerCase() === selectedKeys.toLowerCase()) &&
        (!odometerRange ||
          (Number(item.odometer.replace(/,/g, "")) >= odometerRange[0] &&
            Number(item.odometer.replace(/,/g, "")) <= odometerRange[1])) &&
        (!yearRange ||
          (Number(item.year) >= yearRange[0] &&
            Number(item.year) <= yearRange[1])) &&
        (!selectedDate || item.date === selectedDate)
      );
    });
    setTimeout(() => {
      setAllFilter(result);
      setLoader(false);
    }, 400);
  };

  // reset button ------------------->

  const handleResetBtn = () => {
    setLoader(true);
    setTimeout(() => {
      setAllFilter([...sortedCars]);
      setSelectedMake("");
      setSelectedModel("");
      setSelectedEngine("");
      setSelectedTransmission("");
      setSelectedTraction("");
      setSelectedBrand("");
      setSelectedKeys("");
      setOdometerValue([0, 300000]);
      setYearValue([1965, 2035]);
      setSelectedDate("");
      setLoader(false);
    }, 400);
  };

  // form submit -----------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  //  console.log("date",selectedDate);

  // -----    pagination ----------------------->

  const totalPages = Math.ceil(displayCars.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = displayCars.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        opacity: loader ? "50%" : "100%",
        zIndex: loader ? "-1" : "1",
      }}
    >
      <Banner bannerContent={"Car for 12/16"} image={carBg} />

      <div className="container my-sm-5 fs-5" style={{maxWidth:"1642px"}}>
        {" "}
        <section className=" filter-car mt-4 mt-sm-5 ">
          <form
            className="UtilityBar pt-4 pb-4 px-sm-5 pb-sm-5 "
            onSubmit={handleFormSubmit}
          >
            <div className="searchBar mb-4 d-flex flex-column gap-4 flex-sm-row align-items-end ">
              <div className="w-100 px-4 px-sm-0 ">
                <label htmlFor="searchId" className="fw-bold mb-2 ">
                  Search
                </label>{" "}
                <input
                  type="text"
                  id="searchId"
                  className="w-100 p-1"
                  value={searchCar}
                  onChange={(e) => setSearchCar(e.target.value)}
                />
              </div>
              <div className="col-12 col-sm-2 px-4 px-sm-0">
                <button
                  className="p-1 py-0 w-100 border-0  btn text-white fs-5 text-center"
                  style={{ height: "45px", backgroundColor: "#1e4fbc" }}
                  onClick={handleSearchBtn}
                >
                  Search
                </button>
              </div>

              <div className="sortBy   col-12 col-sm-2 fs-5 px-4 px-sm-0" >
                <Filters
                  Filters={sortBy}
                  defaultValue={"Sort by"}
                  isdisable={true}
                  onChange={setSelectedSort}
                  value={selectedSort}
                  
                />
              </div>
            </div>
            <div className="filters d-flex flex-column align-items-center px-4 px-sm-0">
              <div className="d-flex flex-column flex-sm-row w-100 mb-4 gap-3 gap-sm-4 ">
                <Filters
                  Filters={makeFilter}
                  label={"Make"}
                  isdisable={false}
                  defaultValue={"All"}
                  onChange={setSelectedMake}
                  value={selectedMake}
                />
                <Filters
                  Filters={modelFilter}
                  label={"Model"}
                  isdisable={false}
                  defaultValue={"All"}
                  onChange={setSelectedModel}
                  value={selectedModel}
                />
                <Filters
                  Filters={engineSizeFilter}
                  label={"Engine Size"}
                  defaultValue={"All Sizes"}
                  isdisable={false}
                  onChange={setSelectedEngine}
                  value={selectedEngine}
                />
                <Filters
                  Filters={transmissionFilter}
                  label={"Transmission"}
                  defaultValue={"All Types"}
                  isdisable={false}
                  onChange={setSelectedTransmission}
                  value={selectedTransmission}
                />
              </div>
              <div className="d-flex gap-3 gap-sm-4 mb-4 w-100 flex-column flex-sm-row  ">
                <div className="col-12 col-sm-2">
                  <Filters
                    Filters={tractionFilter}
                    label={"traction"}
                    isdisable={false}
                    defaultValue={"All"}
                    onChange={setSelectedTraction}
                    value={selectedTraction}
                  />{" "}
                </div>
                <div className="col-12 col-sm-2">
                  <Filters
                    Filters={brandFilter}
                    label={"brand"}
                    isdisable={false}
                    defaultValue={"All"}
                    onChange={setSelectedBrand}
                    value={selectedBrand}
                  />{" "}
                </div>

                <div className="col-12 col-sm-1">
                  {" "}
                  <Filters
                    Filters={keysFilter}
                    label={"Keys"}
                    defaultValue={"All Types"}
                    isdisable={false}
                    onChange={setSelectedKeys}
                    value={selectedKeys}
                  />{" "}
                </div>
                <div className="col-12 col-sm-2  ">
                  <RangeSlider
                    label="Odometer"
                    MinValue={0}
                    MaxValue={300000}
                    step={1000}
                    unit={"km"}
                    setRange={setOdometerRange}
                    value={odometerValue}
                    setValue={setOdometerValue}
                  />
                </div>
                <div className="col-12 col-sm-2 ">
                  <RangeSlider
                    label="Year"
                    MinValue={1965}
                    MaxValue={2035}
                    step={1}
                    unit={" "}
                    setRange={setYearRange}
                    value={yearValue}
                    setValue={setYearValue}
                  />
                </div>
                <div className="date">
                  <label htmlFor="date" className="w-100 fw-bold mb-2">
                    Auction Date
                  </label>
                  <input
                    type="date"
                    className="col-12 py-1 px-1 "
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

           <div className="d-flex  w-100 flex-column flex-sm-row px-4 px-sm-0 gap-3 ">
             <button
              className="btn text-white px-5 py-2"
              style={{ backgroundColor: "#1e4fbc" }}
              type="submit"
              onClick={applyAllfilters}
            >
              Apply Filters
            </button>
            <button
              className="btn btn-primary text-white px-5 py-2"
              style={{ backgroundColor: "#1e4fbc" }}
              onClick={handleResetBtn}
            >
              Reset
            </button>
           </div>
          </form>
        </section>
        <section className="filtered-cars px-2 ">
          <div className="select-header  d-flex justify-content-between align-items-center py-4  px-3 ">
            <p className="m-0">{displayCars.length} results</p>
            <div className="cols-12 col-sm-2 ">
              <Filters
                Filters={[5, 10, 15, 20]}
                defaultValue={"items per page"}
                isdisable={true}
                label={""}
                onChange={setItemsPerPage}
                value={itemsPerPage}
              />
            </div>
          </div>

          <div className="car-cards  px-sm-3 pb-3">
            <table
              className=" w-100 h-100 
          "
            >
              <thead >
                <tr 
                className="d-none d-sm-table-row"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "solid lightgray",
                    borderWidth: " 1px 0 1px 0",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "15px",
                    
                  }}
                >
                  <th style={{ padding: "10px", paddingLeft: "15px" }}>
                    Images
                  </th>
                  <th>Vehicle</th>
                  <th>Odometer</th>
                  <th>Engine Size</th>
                  <th>Transmission</th>
                  <th>Traction</th>
                  <th>Date</th>
                  <th>Brand / Keys</th>
                </tr>
              </thead>
              <tbody>
                {loader ? (
                  <LoaderSpinner />
                ) : currentCars.length === 0 ? (
                  <tr>
                    <td colSpan={8}>
                      <h4 className="text-center text-danger mt-3">
                        No Car Found
                      </h4>
                    </td>
                  </tr>
                ) : (
                  currentCars.map((car) => (
                    <tr
                      className="d-flex flex-column p-4 border-bottom d-sm-table-row border-bottom-0"
                      key={car.id}
                      
                    >
                      <td className="py-3 border-top border-bottom ">
                        <Link onClick={() => openNewTab(car.id)}>
                          <img
                            className="card-img"
                            src={car.images[0]}
                            alt="car-img"

                          />{" "}
                        </Link>
                      </td>
                      <td className="py-3  border-bottom" >
                        <Link
                          onClick={() => openNewTab(car.id)}
                          className="fw-bold text-black text-decoration-none"
                        >
                          {car.model} <span>({car.year})</span>
                        </Link>
                      </td>
                      <td className="py-2   border-bottom" >{car.odometer}</td>
                      <td className="py-2  border-bottom" >{car.engineSize}</td>
                      <td className="py-2  border-bottom" >{car.transmission}</td>
                      <td className="py-2  border-bottom" >{car.traction}</td>
                      <td className="py-2  border-bottom" >{car.date}</td>
                      <td className="py-2  border-bottom" >
                        <span className="bg-success text-white p-1">
                          {car.brand}
                        </span>{" "}
                        <p className="fw-medium m-0">
                          {" "}
                          <i className="bi bi-key"> </i> {car.keys}
                        </p>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="cars-footer d-flex flex-column flex-sm-row gap-sm-5 justify-content-end  gap-0  w-100 px-4 p-sm-5">
            <div className=" mt-sm-2 mt-0">
              <Filters
                Filters={[5, 10, 15, 20]}
                defaultValue={"items per page"}
                isdisable={true}
                label={""}
                onChange={setItemsPerPage}
                value={itemsPerPage}
              />
            </div>
            <nav className="" aria-label="Page navigation">
              <Pagination>
                <Pagination.First
                  className="first-btn"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  className="pre-btn"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                />
                {pageNumbers.map((pageNum, index) => (
                  <Pagination.Item
                    key={index}
                    active={pageNum === currentPage}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Pagination.Item>
                ))}

                <Pagination.Next
                  className="next-btn"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1,totalPages))
                  }
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  className="last-btn"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
