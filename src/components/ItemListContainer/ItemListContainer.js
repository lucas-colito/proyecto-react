import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import TituloOfertas from '../TituloOfertas/TituloOfertas';

function ItemListContainer({ titulo }) {
    const [items, setItems] = useState([]);
    const item = [
        {id:1, title:"AMERICAN IPA", price:"100" , pictureUrl:"..."},
        {id:2, title:"OKTOBER", price:"80" , pictureUrl:"..."},
        {id:3, title:"IMPERIAL STOUT", price:"80" , pictureUrl:"..."},
        {id:4, title:"IRISH", price:"50" , pictureUrl:"..."},
    ]
    const traerItems = () => { 
        return new Promise( resolve => {
            setTimeout(() => {
                resolve(item);
            }, 2000)
        })
    }

    useEffect(()=>{
        console.log('Inicializado');
        traerItems().then(items => {
            setItems(items)
        })
    }, [])
    return (
        <>
            <TituloOfertas titulo={ titulo }/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer