import React, { useEffect } from "react";
import "./Cars.css";
import CarItems from "../carItems/CarItems";
import { useState } from "react";

const Cars = () => {
  const [carList, setCarList] = useState([]);

 
                    

  useEffect(() => {
    const fetchData = async()=> fetch('https://myfakeapi.com/api/cars/')
                    .then(data => data.json())
                    .then(data => {
                     const resp =  data.cars
                     console.log({resp});
                     setCarList(resp)
                    })
   fetchData()
  }, [])
  
  return (
    <ul className="carsList">
      
      {carList.map((car, ind) => (
        <CarItems
          key={car.id}
          id = {car.id}
          make={car.car}
          model={car.car_model}
          year={car.car_model_year}
          price={car.price}
          color={car.car_color}
        />
      ))}
    </ul>
  );
};

export default Cars;
