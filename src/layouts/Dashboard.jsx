import React from "react";
import '../App.css';
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import CommentService from "../services/CommentService";
import Auth from "../pages/Auth";
 import { Image} from 'semantic-ui-react'
 import logo from '../../src/image/Logo farbig[1804].png';






export default function Dashboard() {
  return (
    <div>
      
      <ToastContainer position="bottom-right" />
      <Grid >
        <Grid.Row >
          <Grid.Column  width={4}>
            <img src={logo}  alt='logo'/>
            <Image  src='/images/Briefkopf.png' size='massive' />
            
             <Categories /> 
          </Grid.Column>
          <Grid.Column width={12}>
          
          <h1 style={{fontFamily:"Parisienne",color:"violet",fontSize:"60px", textShadow:"2px 2px 4px"}}
          >Nicht die <br></br> Falte zählt <br></br> sondern der <br></br> Mensch</h1>
          

            <Routes>
              
               {/* <Route path="/" element={<Dashboard />} />  */}
              <Route path="/products" element={<ProductList />} />
              <Route path="products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/product/add" element={<ProductAdd />} />
              <Route path="/comments" element={<CommentService/>}/>
              <Route path="auth" element = {<Auth/>}/>
              {/* <Route path="/auth">{localStorage.getItem("currentUser") !=null ?<Navigate to ="/"/>:<Auth/>}
              </Route> */}
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
