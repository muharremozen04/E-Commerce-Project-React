import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Product } from './models/IProductList'
import { listProduct } from './services'


function ProductDetail() {

    const [products, setProducts] = useState<Product[]>([])
    const { pid } = useParams()
    
    useEffect(() => {
      listProduct().then(res => {
        const arr = res.data.Products
       setProducts (arr)
        
    
      })
    }, [])
  



  return (
    <div> <button type="button" className="btn btn-info">Product Detail</button>
   

    <hr />
 

 <div className='row'>
{ products.map((item, index) =>
 <div key={index} className="card col-sm-4 mb-2">

  
   <div className="card-body">
 


     <div className="card">
<div >
  <p className='card-body' ><button type="button" className="btn btn-light">Detail {item.productDetail} ,id= {item.pid}</button></p>
</div>


</div>
  
    
    
   </div>
 </div>
)}
</div>
  </div>
)
}

export default ProductDetail