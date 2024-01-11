import React, {createContext} from "react";

import allproduct from '../assets/allproduct';
export const Shopcontext = createContext(null);

const ShopContextProvider =(props) =>{
const contextValue ={allproduct};

return (
    <Shopcontext.Provider value={contextValue}>
        {props.children}
    </Shopcontext.Provider>
)
}
export default ShopContextProvider;