import { siteConfig, userConfig } from "./configs"
import { ICategoryList } from "./models/ICategoryList"

import { IJwt } from "./models/IJwt"
import { IProductImage } from "./models/IProductImage"
import { IProductImageList } from "./models/IProductImageList"
import { IProductList } from "./models/IProductList"
import { IProductSave } from "./models/IProductSave"
import { control } from "./util"

export const userLogin = ( username: string, password: string ) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}


export const managerGet = () => {
    return siteConfig.get('manager/get')
}

export const register = ( data:any ) => {
    return siteConfig.post('user/register', data)
}


// image list
export const imageList = ( pid: number ) => {
    return userConfig.get<IProductImage>('image/list/'+pid)
}

// image delete
export const imageDelete = ( iid: number ) => {
    return userConfig.get<IProductImage>('image/delete/'+iid)
}

// image add
export const imageAdd = ( pid: number, file: string ) => {
    const sendData = {
        pid: pid,
        file: file
    }
    return userConfig.post<IProductImage>('image/add', sendData)
}

// product list

export const listProduct = () => {
 
    return siteConfig.get<IProductList>("product/listProduct")
}

// product save
export const saveProduct = ( productName: string,productDetail: string,productPrice:string,categoryName:string, file: string ) => {
    const sendData = {
        productName: productName,
        productDetail:productDetail,
        productPrice:productPrice,
        categories:{cid:1},
        productImage: {iid:1}
    }
    return siteConfig.post<IProductSave>('product/saveProduct', sendData)
}

// category list

export const categoryList = () => {
 
    return siteConfig.get<ICategoryList>("category/listCategory")
}

// ımage list

export const listProductImage = () => {
 
    return siteConfig.get<IProductImageList>("image/listProductImage")
}


