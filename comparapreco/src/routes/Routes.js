import Principal from "../componets/pages/Principal/Principal";
import ProductCompare from "../componets/pages/Product Compare/ProductCompare"
import Store from "../componets/pages/Store/Store";
import { Route, Switch } from "react-router-dom";
const Routes = ()=>{

    return(
        <Switch>
            <Route exact path ={'/'} component={Principal}/>
            <Route exact path ={'/productcompare/:id'} component={ProductCompare}/>
            <Route exact path ={'/store/:id'} component={Store}/> 
        </Switch>
    )

}
export default Routes