import { useEffect, useState } from "react";
import { Alert } from "reactstrap";
import CardProductList from "../../Cards/CardProductList";
import ProdutoDataService from "../../../service/ProdutoDataService";
import '../StoreCompare/StoreCompare.css';

const StoreCompare = () => {
    const [locale, setLocale] = useState([]);
    const [inputListLocate, setInputListLocate] = useState([{ locate: '' }]);
    const [listShop, setListShop] = useState([]);
    const [inputListShop, setInputListShop] = useState([{ listShop: ''}]);
    const [productList, setProductList] = useState([])

    const handInputListLocateChange = (e, index) => {
        let { name, value } = e.target;
        let list = [...inputListLocate];
        list[index][name] = value;
        setInputListLocate(list);
    }

    const handleAddClick = () => {
        setInputListLocate([...inputListLocate, { locate: '' }]);
    }

    const handleAddClickListShop = () =>{
        setInputListShop([...inputListShop, {listShop: ''}]);
    }

    const excludeLocateInput = (index) => {
        let list = [...inputListLocate];
        list.splice(index, 1);
        setInputListLocate(list);

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
    }

    const handInputListShopChange = (e, i) =>{
        let { name, value } = e.target;
        let list = [...inputListShop];
        list[i][name] = value;
        setInputListLocate(list);
    } 

   
    const excludeListInput = (i) =>{
        let list = [...inputListShop];
        list.splice(i, 1);
        setInputListShop(list)
    }

    const insertListShop=(e) =>{
        e.preventDefault();
        let valuelist = [];
        if(e.target.listShop.length > 0){
            for(let i = 0; i < e.target.listShop.length; i++){
                valuelist.push(e.target.listShop[i].value)
            }
        }
        else{
            valuelist.push(e.target.listShop.value)
            setListShop(valuelist)
        }
    }

    const clearListShop = () =>{
        setListShop([])
    }

    const populateProductList = () => {
        setProductList(ProdutoDataService.getAllProdutos())
    }

    useEffect(() => {
        populateProductList()
    }, [])
    
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
                                <CardProductList product={productList[0]} />
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
                    <div className="titulo-Principal">
                        <h2>Adicione:</h2>
                        <div className='store-painel'>
                            <h2>Bairro</h2>
                            <form className='locate-form' onSubmit={insertLocale}>
                                {
                                    inputListLocate.length > 0 && (
                                        inputListLocate.map((inputIten, index) => {
                                            return (
                                                <div>
                                                    <input name="locate" placeHolder="Insira um Bairro" value={inputIten.locate} onChange={inputIten => handInputListLocateChange(inputIten, index)} required />
                                                    {
                                                        index !== 0 &&
                                                        <button className='form-dell-button' type='button' onClick={() => excludeLocateInput(index)}>X</button>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }
                                <div className='form-button'>
                                    <button className='form-add-button' type='button' onClick={handleAddClick}>+</button>
                                </div>
                            </form>

                            <h2>Lista de Compras</h2>
                            <form className='locate-form' onSubmit={insertListShop}>
                                {

                                    inputListShop.length > 0 && (
                                        inputListShop.map((inputIten, i) => {
                                            return (
                                                <div>
                                                    <input name="listShop" placeHolder="Insira um Produto" value={inputIten.listShop} onChange={inputIten => handInputListShopChange(inputIten, i)} required />
                                                    {
                                                        i !== 0 &&
                                                        <button className='form-dell-button' type='button' onClick={() => excludeListInput(i)}>X</button>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }
                                <div className='form-button'>
                                    <button className='form-add-button' type='button' onClick={handleAddClickListShop}>+</button>
                                </div>
                            </form>
                        </div>
                        <div className="botaoConcluir">
                            <button className='button-Concluir' type='submit'>Concluir</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default StoreCompare


