import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import CardProductList from "../../Cards/CardProductList";
import ProdutoDataService from "../../../service/ProdutoDataService";
import './ProductCompare.css';
import useProductContext from '../../Context/ProductContext';

const ProductCompare = () => {

    const context = useProductContext();

    const [locale, setLocale] = useState([]);
    const [inputList, setInputList] = useState([{ locate: '' }]);
    const [productList, setProductList] = useState([]);

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
                    <div className='content-page'>
                        <h2 className='title-page'>{productList[0].title}</h2 >
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
                            <div className='card-most-value'>
                                <h3>Menor Preço</h3>
                                <CardProductList product={productList[0]}/>
                            </div>
                        </section>
                        <div className='card-product-list'>
                            <div className='card-product-list-bg'>
                                <h3>Outros Preços</h3>
                                <div className='cards-product'>
                                   
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
                                                index !=0 &&
                                                    <button className='form-dell-button'type='button' onClick={() => excludeLocateInput(index)}>X</button>
                                                }
                                            </div>
                                        )
                                    })
                                )
                            }
                            <div className='form-button'> 
                                <button className='form-submit-button'type='submit'>Concluir</button>
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