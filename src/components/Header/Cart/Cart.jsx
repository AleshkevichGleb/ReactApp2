import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import React from "react";
import buyImage from "../../../assets/images/buy.svg"
import { constants } from "../../../constants/constants";

const Cart = ({items}) => {
    return(
        <Link to = '/cart' state = {true} className= {styles.cart}>
            <span className={styles.cart__title}>{constants.basket}</span>
            <div className={styles.cart__items}>
                <span className={styles.cart__count}>{items.toString()}</span>
                <img className={styles.cart__image} src = {buyImage} alt = "cart" />
            </div>   
        </Link>
    )
}

export default Cart;