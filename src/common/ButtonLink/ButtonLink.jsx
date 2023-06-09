import styles from "./ButtonLink.module.css"
import { Link } from "react-router-dom";

const ButtonLink = ({items, src, title, url, addStyles}) => {
    return(
        <Link to = {url} state = {true} className= {[styles.cart, addStyles].join(' ')}>
            <span className={src ? styles.cart__title : styles.addStylesTitle}>{title}</span>
            {items && 
                <div className={styles.cart__items}>
                    <span className={styles.cart__count}>{items}</span>
                    {   src &&
                        <div className={styles.cart__imageContainer}>
                            <img className={styles.cart__image} src = {src}/>
                        </div>
                    }
                </div> 
            }  
        </Link>
    )
}

export default ButtonLink;