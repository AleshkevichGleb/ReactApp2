import styles from "./ProductsItems.module.css";
import { useParams } from "react-router-dom";
import { typesEat } from "../../../../data/data";
import { useState } from "react";
import OurCaffe from "../../OurCaffe/OurCaffe";
import ToCartElement from "./ToCartElement/ToCartElement";

const ProductsItems = ({fullCount, setfullCount}) => {
    const {url} = useParams();
    
    const {title, products, link} = typesEat.find(type => {
        if(url === undefined) {
            return type.link === 'cold'
        }
        return type.link === url
    });

    return(
        <>
        <div className={styles.productsItems} key = {link}>
            <div className={styles.productsItems__titleContainer}>
                <h2 className={styles.productsItems__title}>{title}</h2>
            </div>
            <div className={styles.itemsContainer}>
                {
                    products.map(product =>
                    <div key = {product.id} className={styles.item}>
                        <img className={styles.item__image} src={product.image.src} alt={product.image.alt} />
                        <div className={styles.item__container}>
                            <div className={styles.item__titleInfo}>
                                <h3 className={styles.item__title}>{product.title}</h3>
                                <span className={styles.item__weight}>Вес: {product.weight}г.</span>
                            </div>
                            <span className={styles.item__description}>{product.description}</span>
                            
                            <ToCartElement fullCount = {fullCount} setfullCount = {setfullCount} productPrice = {product.price}/>

                        </div>
                    </div>
                )}
            </div>
        </div>
        {/* <OurCaffe/>  */}
        </>
    )
}

export default ProductsItems;