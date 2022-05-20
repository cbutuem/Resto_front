import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../API/Api";
import "./carrossel.style.css";

export function Carrossel(){
  const [user, setUser] = useState([]);  
  useEffect(() => {
    async function fetchUser() {
        const response = await api.get("/restaurant/all-restaurants");
        setUser(response.data);
    }
    fetchUser();
}, []);

    return (
        <Carousel className="carrossel">

  <Carousel.Item className="boxCarrossel 1">
  <h1>teste</h1>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 2">
  <h1>teste1</h1>
   <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 3">
  <h1>teste2</h1>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 4">
  <h1>teste3</h1>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    )
}