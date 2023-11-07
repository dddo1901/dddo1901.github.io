import React from 'react'
import './ProductsComparison.scss'
import imgbanner1 from '../assets/images/Comparison/banner-comparison.png'
import { Grid, Item, Table, Label } from "semantic-ui-react";
import Products from "../Data.json";
import ProductCard from './ProductCard';
import { useState } from 'react';

function ProductsComparison() {
    const [selectedItems, setSelectedItems] = useState([]);

    const addToCompare = (item) => {
        setSelectedItems((selectedItems) => [...selectedItems, item]);
    };

    const removeFromCompare = (item) => {
        const filteredItems = selectedItems.filter(
        (items) => items.id !== item.id
        );
        setSelectedItems((selectedItems) => filteredItems);
    };
    if(selectedItems ===''){
        return( 
            <div className='productscomparison-noProduct' >
                <img src={imgbanner1} alt="bannercomp" />
                <h3>No products. Please add products...</h3>
                <p>*Please return to the product page and click on the Compare button to select the product to compare. You should only choose a maximum of 5 products.</p>
            </div>
        )
        }else{
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
                            Description
                            </Label>
                        </Table.Cell>
                        {selectedItems.map((el) => (
                            <Table.Cell key={el.id}>{el.description}</Table.Cell>
                        ))}
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>
                            <Label color="pink" ribbon>
                            Condition
                            </Label>
                        </Table.Cell>
                        {selectedItems.map((el) => (
                            <Table.Cell key={el.id}>{el.condition}</Table.Cell>
                        ))}
                        </Table.Row>
                    </Table.Body>
                    </Table>
                )}
            </div>              
        <Grid columns={selectedItems.length} stackable padded divided>
            <Item.Group>
            {Products.map((items) => (
                <ProductCard
                key={items.id}
                items={items}
                selected={selectedItems}
                addToCompare={addToCompare}
                removeFromCompare={removeFromCompare}
                />
            ))}
            </Item.Group>
        </Grid>
        </div>
        )
}}

export default ProductsComparison
