import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Products from './Products'
import ProductDescription from './ProductDescription'
import { Link,Switch, Route } from 'react-router-dom'
import Header from "./Header"



function App() {
  const [products, setProducts] = useState([])

  async function getData() {
    let response = await axios.get(`https://products-api-01.herokuapp.com/api/products`)
    setProducts(response.data)
    console.log(response.data)
    
  }

  useEffect(() => {
    getData()
    
  }, [])
  
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Link to="/show">
              <Products products={products} setProducts={setProducts}/>
        
            </Link>
          </Route>
          <Route path="/show">
            <ProductDescription />
         </Route>
        </Switch>
      </div>
    );
  }
  export default App