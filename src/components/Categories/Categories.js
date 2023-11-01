import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Products from "../Data.json";


function Categories() {
  const {id} = useParams();
  let item = Products.filter((item) => item.Category.id === id);
  console.log(item);

  return (
    <h1>Categories</h1>
  )
}

export default Categories