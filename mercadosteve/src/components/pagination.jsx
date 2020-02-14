import React, { useState,useContext } from "react";
import Pagination from "react-js-pagination";
import {FetchItemsContext} from './itemsProvider';
//require("bootstrap/less/bootstrap.less");

 
 const Pagination1 =(nResults)=> {

  const [state, setState]=useState(1);
  const results=0;
  
     const {loadMore}= useContext(FetchItemsContext);
     console.log(`resultados en pagination results ${results}`); 
     console.log(`resultados en pagination nResults `+nResults); 
     

  const handlePageChange=(pageNumber) =>{
    
    console.log(`active page is ${pageNumber}`);
    loadMore(pageNumber);
    setState(pageNumber);
    
  }
 
  
    return (
      <div>
        <Pagination
          activePage={state}
          itemsCountPerPage={50}
          totalItemsCount={450}//cambiar por los resultados arrojados por la appi  /results
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    );
  
}
 
export default Pagination1