import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Product, ProductImage } from './models/IProductList'
import UserNavbar from './navbars/UserNavbar'
import { listProduct } from './services'

function ProductList() {

  //Ürünlerle ilgili
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    listProduct().then(res => {
      const arr = res.data.Products
     setProducts (arr)
      
  
    })
  }, [])


  const navigate = useNavigate()
  const gotoDetail = ( item: Product ) => {
    navigate('/productDetail', { state: item } )
  }
  

  


  return (
   
    <div> 
         <hr />
      <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">Search Product</span>
  <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
      
    
   

      <hr />
   

   <div className='row'>
 { products.map((item, index) =>
   <div key={index} className="card col-sm-4 mb-2">
  
    
     <div className="card-body">
     <img src= {item.productImage?.file} className="card-img-top" />
       <h5 className="card-title"><button type="button" className="btn btn-light">{item.productName}</button></h5>
       <p className="card-text">  <button type="button" className="btn btn-info">Category {item.categories.categoryName}</button></p>
     
       <p className="card-text"><button type="button" className="btn btn-success">Price {item.productPrice}</button></p>
     


       <div className="card">
  <div >
    <p className='card-body' ><button type="button" className="btn btn-light">İd: {item.pid}</button></p>
    <a onClick={() => gotoDetail(item) }  className="btn btn-primary" style={{ bottom: 0, position: 'absolute', right: 0, margin: 5,}} >Goto Datil</a>
   
  </div>



</div>
<a  role='button' className="btn btn-danger" style={{ position: 'absolute', bottom: 1, left: 10}}>Delete</a>
      
      
     </div>
   </div>
 )}
 </div>
    </div>
  )
}

export default ProductList