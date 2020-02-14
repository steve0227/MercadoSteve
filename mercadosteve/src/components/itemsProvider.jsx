import React,{createContext} from 'react'
export const FetchItemsContext =createContext({items:[]}) 
class ItemProvider extends React.Component{
    state ={
        items:[],
        search:''

    }
    FetchItems = async (search)=>{
        const response =await (await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${search}`)).json()
            this.setState({items:response.results,search}) 

            console.log(response) 

    }

    loadMore =async(offset) =>{
        const response =await (await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.search}&offset=${50*offset}`)).json()
        this.setState({items:response.results})
    }
    render (){
        const fetchItems = this.FetchItems;
        const {items} = this.state;
        const {children} = this.props;
        const loadMore = this.loadMore;
        return (

            <FetchItemsContext.Provider value={{fetchItems, items, loadMore}}>
                {children}    
            </FetchItemsContext.Provider>

        )

    }
 }
 
 export default ItemProvider