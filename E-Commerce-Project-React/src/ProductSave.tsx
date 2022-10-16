import React, { useEffect, useState } from 'react'
import {  Resultproducts } from './models/IProductSave'
import { saveProduct } from './services'

function ProductSave() {
    const [productName, setproductName] = useState('')
    const [productDetail,setproductDetail] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [categories, setcategories] = useState('')
    const [productImage, setproductImage] = useState('')
    


    const sendFnc = (evt:React.FormEvent) => {
      evt.preventDefault()}

    const [products, setProducts] = useState<Resultproducts[]>([])
    
      saveProduct(productName,productDetail,productPrice,categories,productImage).then(res=>{})
  



  return (
    <>
    <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
            <h3>Product Save</h3>
            <form onSubmit={sendFnc} method='post'>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">productName</label>
                <input onChange={(evt) => setproductName(evt.target.value)}  className="form-control" id="productName" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">productDetail</label>
                <input  onChange={(evt) => setproductDetail(evt.target.value)}  className="form-control" id="productDetail" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">productPrice</label>
                <input  onChange={(evt) => setproductPrice(evt.target.value)}  className="form-control" id="productPrice" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">categoryİd</label>
                <input  onChange={(evt) => setcategories(evt.target.value)}  className="form-control" id="categoryName" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">İmageİd</label>
                <input  onChange={(evt) => setproductImage(evt.target.value)}  className="form-control" id="file" />
            </div>
           

            <button type="submit" className="btn btn-primary"><i className="bi bi-person"></i> Save</button>
            </form>
        </div>
        <div className='col-sm-4'></div>
    </div>
</>

  )
}

export default ProductSave