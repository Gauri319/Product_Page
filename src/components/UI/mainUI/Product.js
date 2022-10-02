import React,{useState} from 'react';
import './Product.css';
import Button from './Button'
import Star from './Star';

function Product(props) {

  const productData=[];
  const [allProductData,setallProductData]=useState([]);

// this api feth data from product api ans stroe into the array named allproductdata
   fetch('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
   .then((res)=>{
    return res.json();
   }).then((data)=>{
      for(const dataKey in data){
         productData.push(data[dataKey]);
         setallProductData(productData);
      }
   })

// // this function  handle the card count

   const[cart_Count,setcart_Count]=useState(0); 


   const handleCart=()=>{
          setcart_Count(cart_Count+1);
          props.updateCard1(cart_Count);
    } 

  return (
    <div>
        <div className='heading'>
            <h3>Products</h3>
        </div>
        <div className='product-row'>
          {
            allProductData&&( allProductData.map((product)=>{  
                 return <div  key={product.id}>
                      <div className='product-card'>
                          <div className='product-image'>
                              <img src={product.productImage}></img>
                          </div>
                          <div className='product-content'>
                              <div className='content'>
                                 <p>{product.productName}</p>
                              </div>
                             
                              <div className='price-and-star'>
                                  <Star/>
                                  <div className='price'>
                                    <div className='oldPrice'>
                                        {product.oldPrice}/-
                                    </div>
                                    <div className='newPrice'>
                                        {product.newPrice}/-
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className='btn'onClick={handleCart}>
                             <Button text="ADD TO CART"  />
                          </div>
                    </div>

                  </div>
            })
            )
          }
        </div>
    </div>
  )
}

export default Product