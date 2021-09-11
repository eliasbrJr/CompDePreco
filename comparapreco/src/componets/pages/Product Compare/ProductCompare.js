import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import CardProductList from "../../Cards/CardProductList";
import ProdutoDataService from "../../../service/ProdutoDataService";
import './ProductCompare.css';

const ProductCompare = () => {
    const [locale, setLocale] = useState([]);
    const [inputList, setInputList] = useState([{ locate: '' }])
    const [productList, setProductList] = useState([])

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
        if(e.target.locate.length > 0)
            for (let i = 0; i < e.target.locate.length; i++) {
                valuelist.push(e.target.locate[i].value)
            }
        else
            valuelist.push(e.target.locate.value)
        setLocale(valuelist)
    }
    const clearlocale = () => {
        setLocale([])
    }
    const populateProductList = ()=>{
        setProductList(ProdutoDataService.getAllProdutos())
    }
    useEffect(()=>{
        populateProductList()
    },[])
    return (
        <div>
            {
                locale.length ? (
                    <div class='content-page'>
                        <h2 class='title-page'>{productList[0].title}</h2 >
                        <section class='top-side'>
                            <div class='locale-list'>
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
                            <div class='card-most-value'>
                                <h3>Menor Preço</h3>
                                <CardProductList product={productList[0]}/>
                            </div>
                        </section>
                        <div class='card-product-list'>
                            <div class='card-product-list-bg'>
                                <h3>Outros Preços</h3>
                                <div class='cards-product'>
                                   
                                    {
                                        productList.map((item) => {
                                            return <CardProductList product={item} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class='locate-painel'>
                        <h2>Adicione um Bairro para Realizar a Busca</h2>
                        <form class='locate-form' onSubmit={insertLocale}>
                            {

                                inputList.length > 0 && (
                                    inputList.map((inputIten, index) => {
                                        return (
                                            <div>
                                                <input name="locate" placeholder="Insira um Bairro" value={inputIten.locate} onChange={inputIten => handInputListChange(inputIten, index)} required />
                                                {
                                                index !=0 &&
                                                    <button class='form-dell-button'type='button' onClick={() => excludeLocateInput(index)}>X</button>
                                                }
                                            </div>
                                        )
                                    })
                                )
                            }
                            <div class='form-button'> 
                                <button class='form-submit-button'type='submit'>Concluir</button>
                                <button class='form-add-button' type='button' onClick={handleAddClick}>Add Bairro</button>
                            </div>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
export default ProductCompare