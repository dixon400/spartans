import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CarDetail = () => {
  const [carDetail, setCarDetail] = useState({});
  const navigate = useNavigate() 
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () =>
      fetch(`https://myfakeapi.com/api/cars/${id}`)
        .then((data) => data.json())
        .then((data) => {
          const resp = data.Car;
          console.log({ resp });
          setCarDetail(resp);
        });
    fetchData();
  }, []);

  const handleClick = () => {
    navigate('/cars')
  }
  const handleAllan = () => {
    navigate('/allan')
  }
  if (!carDetail) return <h2> Not Found!</h2>
  const { car_model, car_model_year, price, car, car_color} =  carDetail
  return (
    <div>
      <button onClick={handleClick}> Back </button>
      <h2>CarDetail</h2>
      <div>
        <img src="https://www.mad4wheels.com/img/free-car-images/mobile/10687/jeep-compass-black-edition-2012-348587.jpg" alt="" srcset="" />
        <p>Model: {car_model}</p>
        <p>Make: {car}</p>
        <p>Year: {car_model_year}</p>
        <p>Price: {price}</p>
        <p>Color: {car_color}</p>
        <p> Contact <span onClick={handleAllan}>Allan</span> to buy</p>
      </div>
    </div>
  );
};

export default CarDetail;
