import React from 'react';
import './CardProductList.css'
const CardProductList = (props) =>{

    return(
        <div>
            <div className = 'card-product-background'>
                <div className = 'content'>
                    <div className = 'card-product-photo'>
                        <img src={props.product.photo} alt='Foto Produto'/>
                    </div>
                    <div className='description'>
                        <div className='card-title'>
                            <div className = 'card-product-text'>
                                <h4> {props.product.title}</h4>
                                <p className ='market-name'>{props.product.market}</p>
                                <p className='market-adress'>{props.product.adress}</p>
                            </div>
                            <div className='market-button'>
                                <button>Loja</button>
                            </div>
                        </div>
                        <div className = 'card-product-price-background'>
                            <div className='card-product-price-description'>
                                <p className='card-product-price-value'>{props.product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CardProductList