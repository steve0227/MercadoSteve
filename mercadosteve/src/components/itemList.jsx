import React from "react";
import Item from "./item"
import Pagination1 from "./pagination";
const ItemList =({items,loading,nResults})=>{
  console.log(`resultados en itemlist ${nResults}`)
    return (
        <div>
            {!items.length ? (
        <div>{loading ? <h1>loading</h1> : <h1>No items found</h1>}</div>
      ) : (
        <div>
          <h1>Items</h1>
          <div>
            {items.map(item => (
              <Item item={item} key={item.id} />
            ))}
          </div>
          
          <Pagination1 nResults={nResults}/>
        </div>
      )}
        </div>
    )

}
export default ItemList