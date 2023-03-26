import React, {FC} from 'react';
import ProductGrid from "@/components/UI/product-grid/ProductGrid";
import {IProductsData} from "@/interfaces/product.interface";
import PageButtons from "@/components/UI/page-buttons/PageButtons";
import Layout from "@/components/layout/Layout";


const Home:FC<IProductsData> = ({products, pageCount, currentPage}) => {
    return (
        <Layout>
            <ProductGrid products={products} />
            <PageButtons pagesCount={pageCount} currentPage={currentPage} />
        </Layout>

    );
};

export default Home;