import React from "react";
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
// import { Image} from 'semantic-ui-react'






export default function Dashboard() {
  return (
    <div>
      
      <ToastContainer position="bottom-right" />
      <Grid >
        <Grid.Row >
          <Grid.Column  width={4}>
            {/* <Image  spaced ="left"    src="/images/IMG_4507.JPG" size="massive"  ></Image> */}
            
             <Categories /> 
          </Grid.Column>
          <Grid.Column width={12}>
            {/* <Image spaced = "right" src ="/images/Briefkopf.jpg " size="big" ></Image> */}
          <h1>Nicht die Falte zählt sondern der Mensch</h1>
           

            <Routes>
              
               {/* <Route path="/" element={<Dashboard />} />  */}
              <Route path="/products" element={<ProductList />} />
              <Route path="products/:name" element={<ProductDetail />} />
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
