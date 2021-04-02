import React, { useState } from 'react';
import frozenYogurt  from '../images/frozenyogurt.jpg';
import RolledIce from '../images/Rolledice.jpg';
import SnowCream from '../images/Snowcream.jpg';
import SoftServe from '../images/Softserve.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={frozenYogurt} alt="frozen yogurt" />
                <h4>Frozen Yogurt</h4>
                <h4>Rs.300</h4>
                <a onClick={() => props.addBasket('frozenYogurt')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={RolledIce} alt="Rolled ice" />
                <h4>Rolled Ice</h4>
                <h4>Rs.400</h4>
                <a onClick={() => props.addBasket('RolledIce')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={SnowCream} alt="Snow cream" />
                <h4>Snow Cream</h4>
                <h4>Rs.250</h4>
                <a onClick={() => props.addBasket('SnowCream')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={SoftServe} alt="Soft serve" />
                <h4>Soft Serve</h4>
                <h4>Rs.360</h4>
                <a onClick={() => props.addBasket('SoftServe')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            
        </div>
    );
}

export default connect(null, { addBasket })(Home);