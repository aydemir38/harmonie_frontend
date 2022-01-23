
import React,{useState} from 'react';
import CartSummary from "./CartSummary";
import { Button, Menu,Container } from 'semantic-ui-react';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import  {Link, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
//import {useHistory} from 'react-router';


export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated,setIsAuthenticated]=useState(true)
    const navigate = useNavigate()
   // const history = useHistory();
    
    function handleSignOut() {
       setIsAuthenticated(false);
       navigate("/products");
     //  history.push("/")

    }

    function handleSignIn() {
        setIsAuthenticated(true)
        
    }

    return (
        <div>
            <Menu inverted fixed="top" color='olive' size='small' >
                <Container>
                    <Menu.Item name='home'/>

                    <Menu.Item name='messages'/>

                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary />}

                        {isAuthenticated?<SignedIn  signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}   
                        
                        
                        <Menu.Item>
                            <Button > {localStorage.getItem("currentUser") == null ?<Link to="/auth" >Login/Register</Link>:
                            <Link to ={{pathname : '/user/' + localStorage.getItem("currentUser")}}>Profile</Link>}</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
