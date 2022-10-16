export interface IProductSave {
    status: boolean;
    result: Resultproducts[]
}

export interface Resultproducts {
    pid:           number;
    productName:   string;
    productPrice:  string;
    productDetail: string;
    categories:    Categories;
    productImage:  ProductImage;
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
