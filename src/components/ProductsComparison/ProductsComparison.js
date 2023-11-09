import React from 'react'
import './ProductsComparison.scss'
import imgbanner1 from '../assets/images/Comparison/banner-comparison.png'
import { Table, Label, Item } from "semantic-ui-react";
import ProductCard from './ProductCard';
import { useState } from 'react';
import { Col } from 'react-bootstrap';

function ProductsComparison({products}) {

    const [selectedItems, setSelectedItems] = useState([]);

    const addToCompare = (item) => {
        setSelectedItems((selectedItems) => [...selectedItems, item]);
    };

    const removeFromCompare = (item) => {
        const filteredItems = selectedItems.filter(
        (product) => product.id !== item.id
        );
        setSelectedItems((selectedItems) => filteredItems);
    }

    return (
        <div className='productscomparison'>
            <div className='productscomparison-container'>
                <div className='productscomparison-container-title'>
                    <h1>COMPARISON <br/> PRODUCTS</h1>
                    <img src={imgbanner1} alt="bannercomp" />
                </div>
                <p>You can compare products to make the most suitable choice.</p>
                <p>*You can only compare a maximum of <span style={{color:'red',fontWeight:'600'}}>5 products</span>. To add new products, please delete existing products in the product comparison page.</p>
                {selectedItems.length > 0 && (
                    <Table definition>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell></Table.HeaderCell>
                        {selectedItems.map((el) => (
                            <Table.HeaderCell key={el.id}>{el.name}</Table.HeaderCell>
                        ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                        <Table.Cell>
                            <Label color="orange" ribbon>
                            Price
                            </Label>
                        </Table.Cell>
                        {selectedItems.map((el) => (
                            <Table.Cell key={el.id}>{el.price}</Table.Cell>
                        ))}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>
                            <Label color="teal" ribbon>
                            Brand
                            </Label>
                        </Table.Cell>
                        {selectedItems.map((el) => (
                            <Table.Cell key={el.id}>{el.Brand.name}</Table.Cell>
                        ))}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>
                            <Label color="pink" ribbon>
                            Description
                            </Label>
                        </Table.Cell>
                        {selectedItems.map((el) => (
                            <Table.Cell key={el.id}>{el.Description}</Table.Cell>
                        ))}
                        </Table.Row>
                    </Table.Body>
                    </Table>
                )}
            </div>       
                <Col xs={12} sm={6} md={6} lg={3}> 
                    <Item.Group>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                                selected={selectedItems}
                                addToCompare={addToCompare}
                                removeFromCompare={removeFromCompare}
                            />
                        ))}
                    </Item.Group>
                </Col>
        </div>
    )
}

export default ProductsComparison
