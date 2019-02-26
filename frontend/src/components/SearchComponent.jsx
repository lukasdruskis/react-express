import React, { Component } from 'react'

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.props = props
}

 render() {
   const {search, handleKeyUp} = this.props
   console.log(search);
   
   return (
     <form>
       <h1>Įveskite žodį nezinau, arba telefonas, arba programavimas :)</h1>
       <input
         placeholder="Paieška.."
         ref={input => this.search = input}
         onKeyUp={e => handleKeyUp(e)}
       />
       <div>{search.map((item, index) => 
       <div style={{backgroundColor:'#f9f9f9'}} key={index}>{item.random}</div>) }</div>

     </form>
   )
 }
}

export default SearchComponent;