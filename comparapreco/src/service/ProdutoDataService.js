import ProdutoData from "../http-common"

const getAllProdutos = () =>{
    return ProdutoData.get("produto/")
}

export default{
    getAllProdutos
}