import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./carrossel.style.css";

export function Carrossel(){

    return (
        <Carousel className="carrossel">

  <Carousel.Item className="boxCarrossel 1">
  <h1>ITEM 1</h1>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 2">
  <h1>ITEM 2</h1>
   <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 3">
  <h1>ITEM 3</h1>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="boxCarrossel 4">
  <h1>ITEM 4</h1>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    )
}