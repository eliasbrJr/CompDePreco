import './CardProductList.css'
const CardProductList = (props) =>{

    return(
        <div>
            <div class = 'card-product-background'>
                <div class = 'content'>
                    <div class = 'card-product-photo'>
                        <img src={props.product.photo} alt='Foto Produto'/>
                    </div>
                    <div class='description'>
                        <div class='card-title'>
                            <div class = 'card-product-text'>
                                <h4> {props.product.title}</h4>
                                <p class ='market-name'>{props.product.market}</p>
                                <p class='market-adress'>{props.product.adress}</p>
                            </div>
                            <div class='market-button'>
                                <button>Loja</button>
                            </div>
                        </div>
                        <div class = 'card-product-price-background'>
                            <div class='card-product-price-description'>
                                <p class='card-product-price-value'>{props.product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CardProductList