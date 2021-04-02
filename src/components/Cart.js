import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';


import frozenYogurt from '../images/frozenyogurt.jpg';
import RolledIce from '../images/Rolledice.jpg';
import SnowCream from '../images/Snowcream.jpg';
import SoftServe from '../images/Softserve.jpg';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    
    const productImages = (product) => {
        if( product.tagName === 'frozenYogurt') {
            return frozenYogurt;
        } else if(product.tagName === 'RolledIce') {
            return RolledIce;
        } else if(product.tagName === 'SnowCream') {
            return SnowCream;
        } else if(product.tagName === 'SoftServe') {
            return SoftServe;
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>
            
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">Rs {product.price}</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="remove-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="add-circle-outline"></ion-icon>   
                </div>
                <div className="total">Rs {product.numbers * product.price}</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Order Summary</h4>
                <h4 className="basketTotal">Rs {basketProps.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);

