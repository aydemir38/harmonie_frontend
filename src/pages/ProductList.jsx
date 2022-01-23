import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Table, Button,Image } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/action/cartActions";
import {toast} from  "react-toastify";
import PRODUCT_DATA from '../utilities/list-of-data-products/PRODUCT_DATA';
import styles from './ProductList.module.css';


export default function ProductList() {


    const productData = PRODUCT_DATA;
     
  

  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.name.common}  hinzugefügt !`)
  };

 
  return (
    <div  className={styles.bodyimage}>
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>produkt</Table.HeaderCell>
            <Table.HeaderCell>preis</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {products.map((product) => (
            <Table.Row key={product.name.common}>
              <Table.Cell>{product.name.official}</Table.Cell>
              <Table.Cell ><Link to={`/products/${product.name.common}`}>{product.name.common}</Link> </Table.Cell>
              {/* <Table.Cell ><Link to={`/products/${product.productName}`}>{product.productName}</Link> </Table.Cell> */}
              <Table.Cell><Button onClick={ () => handleAddToCart(product) } > In den Warenkorb </Button></Table.Cell>

            </Table.Row>

          ))}







        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
