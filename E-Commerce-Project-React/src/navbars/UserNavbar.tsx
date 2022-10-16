import React from 'react'
import { NavLink } from 'react-router-dom'
import UserNameLogOut from '../components/UserNameLogOut'
import { control } from '../util'

function UserNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">User Login</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink to={'/productList' } className='nav-link' >Products</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/productDetail' } className='nav-link' >Details</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/productImage/:pid' } className='nav-link' >İmageSave</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/productSave' } className='nav-link' >ProductSave</NavLink>
            </li>

            <li className="nav-item">           
            <NavLink to={'/categoryList' } className='nav-link' >CategoryList</NavLink>
            </li>

            <li className="nav-item">            
            <NavLink to={'/productImageList' } className='nav-link' >ProductImageList</NavLink>
            </li>
           
            <UserNameLogOut/>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default UserNavBar