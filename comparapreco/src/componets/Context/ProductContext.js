import React, { useState, useContext, createContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0.0);
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

export const useProductContext = () => useContext(AppContext);
export default AppProvider;