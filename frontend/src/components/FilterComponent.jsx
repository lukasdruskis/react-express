import React, { Component } from "react";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const {getModelFilter} = this.props
    getModelFilter()
  }

  render() {
    const {filter, onChosenModel} = this.props
    return (
      <div>
        <h1>Pasirinkite norimus kriterijus</h1>
        <select style={{width : "150px", height : "25px"}}onChange={ e => onChosenModel(e)}>
          <option value="" selected disabled>Pasirinkite modelį</option> 
          {filter && filter.map((item, index) => 
          <option value= {item.modelID} key={index}>{item.model}</option>) }        
       </select>

       <select style={{width : "150px", height : "25px"}}>
          <option>Pasirinkite spalvą</option>  
       </select>

       <select style={{width : "150px", height : "25px"}}>
          <option>Pasirinkite kuro tipą</option>         
       </select>
       <select style={{width : "150px", height : "25px"}}>
          <option>Pasirinkite metus</option>         
       </select>
      </div>
    );
  }
}

export default FilterComponent;
