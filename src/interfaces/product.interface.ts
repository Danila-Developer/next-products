export default interface IProduct {
    readonly id: string;
    readonly name: string;
    readonly brand: string;
    readonly imageUrl: string;
    readonly badge?: string;
}

export interface IProductsData {
    products: IProduct[];
    pageCount: number;
    currentPage: number;
}

export interface IProductData {
    product: IProduct
}