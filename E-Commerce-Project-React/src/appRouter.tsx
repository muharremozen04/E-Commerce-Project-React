import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Admin from './Admin'
import CategoryList from './CategoryList'



// import components
import Login from './Login'


import ProductDetail from './ProductDetail'
import ProductImage from './ProductImage'
import ProductImageList from './ProductImageList'
import ProductList from './ProductList'
import ProductSave from './ProductSave'
import AdminSecurity from './security/AdminSecurity'
import UserSecurity from './security/UserSecurity'
import User from './User'


// Security



export const routes =
<BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/'  element={<Login/>} />
       
            
        <Route path='/productImage/:pid' element={ <UserSecurity component={<ProductImage/>}/> } />
       <Route path='/productSave' element={ <UserSecurity component={<ProductSave/>}/> } />
        <Route path='/productList' element={ <UserSecurity component={<ProductList/>}/> } />
        <Route path='/productDetail' element={ <UserSecurity component={<ProductDetail/>}/> } />
        <Route path='/categoryList' element={ <UserSecurity component={<CategoryList/>}/> } />
        <Route path='/productImageList' element={ <UserSecurity component={<ProductImageList/>}/> } />
  
       
       
    </Routes>
</BrowserRouter>