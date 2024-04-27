import { createContext, useState,useEffect} from "react";
import PRODUCT from '../shop-data.json';


export const ProductsContext=createContext({
    product:[]
})


export const ProductProvider=({children})=>{
    const [products,setProdcuts]=useState(PRODUCT);
    const value ={products}
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}