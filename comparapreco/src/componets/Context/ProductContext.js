import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext(null);

const AppProvider = ({children}) => {

    const [id, setId] = useState(null);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(null);
    const [nomeMarca, setNomeMarca] = useState("");
    const [nomeCategoria, setNomeCategoria] = useState("");
    
    const contextData = {
        id,
        nome,
        preco,
        nomeMarca,
        nomeCategoria,
        setId,
        setNome,
        setPreco,
        setNomeMarca,
        setNomeCategoria
    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    );
}

export const ProductContext = () => useContext(AppContext);
export default AppProvider;