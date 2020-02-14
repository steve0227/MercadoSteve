import React from "react";

const Item = ({item}) => {
  return (
    <div className="card" style={{width : '18rem'}}>
      <img src={item.thumbnail} className="card-img-top" style={{width : '8rem'}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
        Precio: ${item.price}
          {item.currency_id}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Unidades disponibles: {item.available_quantity} </li>
        <li className="list-group-item">Id vendedor: {item.seller.id}</li>
      </ul>
      
    </div>
  );
};
 export default Item