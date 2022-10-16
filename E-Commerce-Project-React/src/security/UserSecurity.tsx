import React from 'react'
import { Navigate } from 'react-router-dom'
import { JsxElement } from 'typescript'
import UserNavbar from '../navbars/UserNavbar'

import { control } from '../util'

function UserSecurity( item: { component: JSX.Element} ) {

  const jwt = control()
  let userRole = false
  if ( jwt !== null ) {
    jwt.result.authorities.map( item => {
        if (item.authority === "ROLE_user") {
            userRole = true
          
            
        }
    })
  }

  return (
    userRole === false
    ?
    <Navigate to='/' replace />
    :
    <><UserNavbar/>{item.component}</>
  )
}

export default UserSecurity