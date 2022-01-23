// wo ich alle state n sammle

//import { useReducer } from "react";
import { combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";



const rootReducer = combineReducers({
    cart : cartReducer,
  //  user : userReducer
})

export default rootReducer;

