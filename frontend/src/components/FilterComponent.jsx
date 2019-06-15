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
    const {filter, onChosenModel, fetchedAdverts, getFilteredAdverts} = this.props
    return (
      <div>
        <h1>Pasirinkite norimus kriterijus</h1>
        <select name="model" 
        onChange={ (e) => {onChosenModel(e); getFilteredAdverts(e) }}>

          <option value="" selected disabled>Pasirinkite modelį</option> 

          {filter && filter.map((item, index) => 
          <option defaultValue = "Pasirinkite Modeli" value= {item.modelID} key={index}>{item.model}</option>) }        
       </select>

        <div>

        Modelis: 
        {/* {fetchedAdverts && fetchedAdverts} */}
        
        <br></br>

        Spalva:
        {fetchedAdverts && fetchedAdverts.advertColor}
        
        
        </div>

      </div>
    );
  }
}

export default FilterComponent;
