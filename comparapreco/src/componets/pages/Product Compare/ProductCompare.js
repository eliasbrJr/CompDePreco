import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import CardProductList from "../../Cards/CardProductList";
import ProdutoDataService from "../../../service/ProdutoDataService";
import './ProductCompare.css';
import axios from 'axios';
import { useProductContext } from '../../Context/ProductContext';

const ProductCompare = (props) => {
    const [locale, setLocale] = useState([]);
    const [inputList, setInputList] = useState([{ locate: '' }]);
    const [productList, setProductList] = useState([]);
    const [ProductNotFound,setProductNotFound] = useState(false)
    const [filtered, setFiltered] = useState([])
    const name = props.match.params.nome;
    const handInputListChange = (e, index) => {
        let { name, value } = e.target;
        let list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, { locate: '' }]);
    }
    const excludeLocateInput = (index) => {
        let list = [...inputList];
        list.splice(index, 1);
        setInputList(list);

    }
    const insertLocale = (e) => {
        e.preventDefault();
        let valuelist = [];
        if (e.target.locate.length > 0)
            for (let i = 0; i < e.target.locate.length; i++) {
                valuelist.push(e.target.locate[i].value)
            }
        else
            valuelist.push(e.target.locate.value)
        setLocale(valuelist)
    }
    const clearlocale = () => {
        setLocale([])
        setProductList([])
    }
    const  populateProductList =()=>{
        if(locale.length>0){
         ProdutoDataService.getProductByName(name)
        .then( response =>{
            let listFilter = response.data.content.filter((element)=>{
                let bairro = element.lojas[0].logradouro.split(";")[1]

                return inputList.map(iten=>iten.locate.toLocaleLowerCase())
                .includes(bairro.trimStart().toLocaleLowerCase())
                
            })
            if(listFilter.length>0){
                listFilter.sort((a,b)=> a.preco - b.preco) 
                setProductList(listFilter)
            }else{
                setProductNotFound(true)   
            }
        })
        }
    }
    useEffect(()=>{
        populateProductList()
    },[locale])
    return (
        <div>
            {
                locale.length > 0 ? (
                    <div className='content-page'>
                        <h2 className='title-page'>{productList.length ? productList[0].title : "Produto N??o Encontrado"}</h2 >
                        <section className='top-side'>
                            <div className='locale-list'>
                                <h3> Locais escolhidos </h3>
                                <ul>

                                    {
                                        locale.map((item) => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <button onClick={clearlocale}>Edit</button>
                            </div>
                            <div id='card-most-value' className='card-most-value'>
                                <div class='img-star'>
                                    <img src='/Photos/star1.png' />
                                </div>
                                <h3>Menor Pre??o</h3>
                                {
                                    productList.length &&
                                    <CardProductList product={productList[0]} />
                                }
                            </div>
                        </section>
                        <div className='card-product-list'>
                            <div className='card-product-list-bg'>
                                <h3>Outros Pre??os</h3>
                                <div id = 'cards-product' className='cards-product'>
                                    {productList.length ? (
                                        productList.map((item) => {
                                            return <CardProductList product={item} />
                                        })) : ( !ProductNotFound ? (
                                        <div className='loader-container'>
                                            <div class="loader"></div>
                                            <span>Carregando</span>
                                        </div>
                                     ):(
                                            <h2>N??o h?? Produto pra essa localidade</h2>     
                                     ))

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='locate-painel'>
                        <h2>Adicione um Bairro para Realizar a Busca</h2>
                        <form className='locate-form' onSubmit={insertLocale}>
                            {

                                inputList.length > 0 && (
                                    inputList.map((inputIten, index) => {
                                        return (
                                            <div>
                                                <input name="locate" placeHolder="Insira um Bairro" value={inputIten.locate} onChange={inputIten => handInputListChange(inputIten, index)} required />
                                                {
                                                    index != 0 &&
                                                    <button className='form-dell-button' type='button' onClick={() => excludeLocateInput(index)}>X</button>
                                                }
                                            </div>
                                        )
                                    })
                                )
                            }
                            <div className='form-button'>
                                <button className='form-submit-button' type='submit'>Concluir</button>
                                <button className='form-add-button' type='button' onClick={handleAddClick}>Add Bairro</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
export default ProductCompare