import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';
import { Button, Card, Image } from 'semantic-ui-react'


export default function ProductDetail() {
    let { name } = useParams()

   const [product, setProduct] = useState({});

    useEffect(() => {
     let productService = new ProductService()
     productService.getProducts().then(result => setProduct(result.data))
   }, [])

    return (
        
        <div>
           {name}


            <Card.Group>



                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/molly.png'
                        />
                         <Card.Header>{product.productName}</Card.Header> 
                       

                         {/* <Card.Meta>{product.category.categoryName}</Card.Meta>  */}

                         <Card.Description>

                        Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
               
            </Card.Group>


        </div>
    )
}

