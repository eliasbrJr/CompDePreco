import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CardProductList.css'
const CardProductList = (props) =>{

    const [address, setAdress] = useState()

    const getAdress = (endereco)=>{
        axios(`https://cep.awesomeapi.com.br/json/${endereco}`)
        .then(response =>{
            setAdress(`${response.data.address}; ${response.data.district}`)
            })
    }
    useEffect(()=>{
        if(props.product.lojas.length)
            getAdress(props.product.lojas[0].cep);
    },[])

    return(
        <div>
            <div className = 'card-product-background'>
                <div className = 'content'>
                    <div className = 'card-product-photo'>
                        <img src={props.product.foto} alt='Foto Produto'/>
                    </div>
                    <div className='description'>
                        <div className='card-title'>
                            <div className = 'card-product-text'>
                                <h4> {props.product.nome} {props.product.nomeMarca}</h4>
                                <p className ='market-nome'>{address}</p>
                                <p className='market-adress'>{props.product.lojas.length ? props.product.lojas[0].localizacao : ""}</p>
                            </div>
                            {props.product.lojas.length &&(
                                <div className='market-button'>
                                    <Link to={`/store/${props.product.lojas[0].id}`}class='button-to-market'>Loja</Link>
                                </div>
                            )}
                        </div>
                        <div className = 'card-product-price-background'>
                            <div className='card-product-price-description'>
                                <p className='card-product-price-value'>{props.product.preco}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CardProductList