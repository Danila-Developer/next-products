import Home from "@/components/screens/home/Home";
import {GetServerSideProps, NextPage} from "next";
import {IProductsData} from "@/interfaces/product.interface";
import ProductService from "@/services/product.service";

const HomePage:NextPage<IProductsData> = ({products, pageCount, currentPage}) => {
  return <Home products={products} pageCount={pageCount} currentPage={currentPage} />
}

export default HomePage


export const getServerSideProps: GetServerSideProps<IProductsData> = async (context) => {
  let page: number | string;
  if (context.query.page) page = context.query.page.toString()
  else page = 1

  const currentPage = +page

  const pageCount = await ProductService.getProductPagesCount()
  const products = await ProductService.getProductByPage(page)

  return {
    props: { products, pageCount, currentPage}
  }
}
