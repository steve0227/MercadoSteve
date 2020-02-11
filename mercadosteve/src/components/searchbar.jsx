import React,{useState} from "react";
import ItemList from "./itemList";
const SearchBar =()=>{
    const [search,setSearch]=useState('');
    const [items,setItems]=useState([]);
    const [loading,setLoading]=useState(false);
    return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onClick={async  e=>{
            e.preventDefault();
            const response =await (await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`)).json()
            setItems(response.results)
            setLoading(true);
            console.log(response) 
        }}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" value={search} onChange={e=>{
                setSearch(e.target.value);
            }} ></input>
        <button className="btn btn-outline-success my-2 my-sm-0">Buscar</button>
        </form>
    </nav>
    <ItemList items={items} loading={loading}/>
    </div>
    )
}//#fff159 ffe600 2d3277

export default SearchBar