

import React, { useEffect, useState } from 'react'
import { Customer } from './models/ICategoryList'
import { categoryList } from './services'

function CategoryList() {

    const [products, setProducts] = useState<Customer[]>([])
    useEffect(() => {
        categoryList().then(res => {
        const arr = res.data.customers
       setProducts (arr)
        
    
      })
    }, [])
  return (
    <div> <button type="button" className="btn btn-info">Category</button>
   

    <hr />
 

 <div className='row'>
{ products.map((item, index) =>
 <div key={index} className="card col-sm-4 mb-2">

  
   <div className="card-body">

     <h5 className="card-title"><button type="button" className="btn btn-light">{item.categoryName}</button></h5>
     <p className="card-text">  <button type="button" className="btn btn-info">Categoryİd {item.cid}</button></p>
   
 


     <div className="card">


</div>
  
    
    
   </div>
 </div>
)}
</div>
  </div>


  )
}

export default CategoryList