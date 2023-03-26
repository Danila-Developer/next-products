import IProduct from "@/interfaces/product.interface";
import {API_URL, PRODUCT_ON_PAGE} from "@/constants";

export default class ProductService {
    static async getProductPagesCount():Promise<number> {
        const response = await fetch(`${API_URL}/products?_page=1&_limit=1`)
        const productsCount = +response.headers.get('X-total-count')
        const pageCount = Math.ceil(productsCount/PRODUCT_ON_PAGE)
        return pageCount
    }

    static async getProductByPage(page: number | string): Promise<IProduct[]> {
        const response = await fetch(`${API_URL}/products?_page=${page}&_limit=${PRODUCT_ON_PAGE}`)
        const products: IProduct[] = await response.json()
        return products
    }
}