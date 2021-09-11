import React, { useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [id, setId] = useState(null);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(null);
    const [nomeMarca, setNomeMarca] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    
    const contextData = {

    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );

    export const ProductContext = () => useContext(AppContext);
    export default AppProvider;
}