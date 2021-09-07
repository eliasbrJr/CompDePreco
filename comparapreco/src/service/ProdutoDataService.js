import ProdutoData from "../http-common"


const getAllProduto = () =>{
    return ProdutoData.get("produto/")
}