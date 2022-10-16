export interface IProductList {
    Products: Product[];
}

export interface Product {
    pid:           number;
    productName:   string;
    productPrice:  string;
    productDetail: string;
    categories:    Categories;
    productImage:  ProductImage | null;
 
}

export interface Categories {
    cid:          number;
    categoryName: string;
}

export interface ProductImage {
    iid:  number;
    pid:  number;
    file: string;
}

