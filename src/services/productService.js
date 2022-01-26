
import axios from "axios"

export default class ProductService {
    
    getProducts(){
        return axios.get("http://localhost:3004/daten")
    }
     

}
// https://restcountries.com/v3.1/all