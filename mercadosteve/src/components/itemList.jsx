import React from "react";
import Item from "./item"
const ItemList =({items,loading})=>{
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
          <button >Load more</button>
        </div>
      )}
        </div>
    )

}
export default ItemList