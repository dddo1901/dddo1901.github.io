import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Products from "../Data.json";

function Brands() {
  const { id } = useParams();
  let items = Products.filter((items) => items.Brand.id === id);
  console.log(items);
  return (
    <div>
     <h1>Brands</h1> 
    </div>
  )
}

export default Brands