import React from 'react'
import { Navigate } from 'react-router-dom'
import { JsxElement } from 'typescript'
import AdminNavbar from '../navbars/AdminNavbar'

import { control } from '../util'

function AdminSecurity( item: { component: JSX.Element} ) {

  const jwt = control()
  let adminRole = false
  if ( jwt !== null ) {
    jwt.result.authorities.map( item => {
        if (item.authority === "ROLE_admin") {
            adminRole = true
        }
    })
  }

  return (
    adminRole === false
    ?
    <Navigate to='/' replace />
    :
    <><AdminNavbar/>{item.component}</>
  )
}
export default AdminSecurity