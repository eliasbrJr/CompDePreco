import LojaData from "../http-common";

const getAllLojas = () =>{
    return LojaData.get("lojas/")
}

export default{
    getAllLojas
}