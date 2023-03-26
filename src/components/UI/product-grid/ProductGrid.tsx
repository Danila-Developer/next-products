import React, {FC} from 'react';

import {IProductsData} from "@/interfaces/product.interface";
import Grid from "@/components/UI/grid/Grid";
import Product from "@/components/UI/product/Product";


const ProductGrid: FC<IProductsData> = ({ products }) => {
    return (
        <div>
            <Grid>
                {
                    products.map(product =>
                        <Product product={product} key={product.id} />
                    )
                }
            </Grid>
        </div>
    );
};

export default ProductGrid;