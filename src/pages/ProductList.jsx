import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Table, Button,Image } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/action/cartActions";
import {toast} from  "react-toastify";
import styles from './ProductList.module.css';


export default function ProductList() {


   
     
  

  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    let productService = new ProductService()
    productService.getProducts().then(result => setProducts(result.data))
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.productName}  hinzugefügt !`)
  };

 
  return (
    <div  className={styles.bodyimage}>
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Produkt</Table.HeaderCell>
            <Table.HeaderCell>Preis</Table.HeaderCell>
            <Table.HeaderCell>Katagorie</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell ><Link to={`/products/${product.id}`}>{product.productName}</Link> </Table.Cell>
              <Table.Cell ><Link to={`/products/${product.id}`}>{product.unitPrice}</Link> </Table.Cell>
              <Table.Cell ><Link to={`/products/${product.id}`}>{product.category.categoryName}</Link> </Table.Cell>
              
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
