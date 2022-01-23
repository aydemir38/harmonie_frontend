
import axios from "axios"

export default class ProductService {
    getProducts(){
        return axios.get("https://restcountries.com/v3.1/all")
    }
  //  getByProductName(ProductName){
  //      return axios.get("http://localhost:8080/api/products/getByProductName?productName=" + productName)
   // }   

}