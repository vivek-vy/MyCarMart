import { createContext, useEffect, useState } from "react";

export const carsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCarsData] = useState(()=>{
    const saved = localStorage.getItem("cars");
    return saved ? JSON.parse(saved) : [];
  });

  const [loader, setLoader] = useState(false);

  useEffect(() => {
     setLoader(true);
    const fetchData = async () => {
       
      const response = await fetch("./cars.json");
      const data = await response.json();

      setTimeout(() => {
        // setCarsData(data.cars);
          localStorage.setItem("cars", JSON.stringify(data.cars)); 
        setLoader(false);
      },400);
    };
    fetchData();
  }, []);

  return (
    <carsContext.Provider value={{ cars, loader, setLoader }}>
      {children}
    </carsContext.Provider>
  );
};
