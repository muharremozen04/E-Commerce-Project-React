import React, { useEffect, useState } from 'react'
import { Product } from './models/IProductImageList'
import {  listProductImage } from './services'

function ProductImageList() {

    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        listProductImage().then(res => {
        const arr = res.data.Products
       setProducts (arr)
        
    
      })
    }, [])


   
      
    


  return (
    <div> <button type="button" className="btn btn-info">Products</button>
   

    <hr />
 

 <div className='row'>
{ products.map((item, index) =>
 <div key={index} className="card col-sm-4 mb-2">

  
   <div className="card-body">
   <img src= {item.file} className="card-img-top" />
   
   
     <p className="card-text">  <button type="button" className="btn btn-info">Product İmage İd {item.iid}</button></p>
   
  


  
    
    
   </div>
 </div>
)}
</div>
  </div>
  )
}

export default ProductImageList