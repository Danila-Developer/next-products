import React, {FC} from 'react';
import style from './Product.module.css'
import {IProductData} from "@/interfaces/product.interface";
import Image from "next/image";


const Product:FC<IProductData> = ({ product }) => {
    return (
        <div className={style.product}>
            <div className={style.productImageWrapper}>
                <Image src={product.imageUrl} alt={product.name} className={style.productImage} width={300} height={400} />
            </div>

            <div className={style.productInfo}>
                <div>
                    <span className={style.productName}>{product.name}{" "}
                        {
                            product.badge
                            ? <span className={style.productBadge}>{product.badge}</span>
                            : <></>
                        }
                    </span>
                </div>
                <div className={style.productBrand}>
                    {product.brand}
                </div>
            </div>
        </div>
    );
};

export default Product;