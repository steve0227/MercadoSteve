import React from "react";

const Item = ({item}) => {
  return (
    <div className="card" style={{width : '18rem'}}>
      <img src={item.thumbnail} className="card-img-top" style={{width : '8rem'}}alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {item.title}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      
    </div>
  );
};
 export default Item