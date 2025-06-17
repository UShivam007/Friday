import React, { useEffect, useState } from 'react'
import Wrapper from './subpage/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import App from '../pages/App';



const Dashboard = () => {

  let [Product, setProduct] = useState(0);
  let [Products, setGetProducts] = useState([]);

  useEffect(() => {
   const fetchProducts = async () => {
      try {
        const response = await fetch ("https://fakestoreapi.com/products");
        const data = await response.json();
        setGetProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  },[]);

  console.log(Products);
 
  
return (
  <div className='p-2 grid grid-cols-5 gap-2'>
    {Products.map((product) => (
    <div className="col-md-3 ">
      <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} style={{height:"345px" , padding:"10px"}}/>
        <Card.Body>
          <Card.Title>{product.id}  
            <span>{` ) ${product.title}`}</span>
          </Card.Title>
          <Card.Text>
            <span className='font-medium text-xl'>Category :   {product.category}</span>
          </Card.Text> 
          <Card.Text>
          
          <p className='bg-green-300'>Price : {product.price} /- $ </p>
          {product.rating['rate']}
          </Card.Text>
          
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
   ))}; 

  </div>

)
};

export default Dashboard;