import Principal from "../componets/pages/Principal/Principal";
import ProductCompare from "../componets/pages/Product Compare/ProductCompare"
import Store from "../componets/pages/Store/Store";
import StoreCompare from "../componets/pages/StoreCompare/StoreCompare"
import { Route, Switch } from "react-router-dom";
const Routes = ()=>{

    return(
        <Switch>
            <Route exact path ={'/'} component={Principal}/>
            <Route exact path ={'/productcompare/:nome'} component={ProductCompare}/>
            <Route exact path ={'/store/:id'} component={Store}/> 
            <Route exact path ={'/storecompare/:id'} component={StoreCompare}/>
        </Switch>
    )

}
export default Routes