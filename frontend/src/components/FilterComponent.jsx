import React, { Component } from "react";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const {getModelFilter, getFilteredAdverts} = this.props
    getModelFilter()
    getFilteredAdverts()
  }

  render() {
    const {filter, onChosenModel, getFilteredAdverts} = this.props
    return (
      <div>
        <h1>Pasirinkite norimus kriterijus</h1>
        <select name="model" onChange={ e => onChosenModel(e)}>
          <option value="" selected disabled>Pasirinkite modelį</option> 

          {filter && filter.map((item, index) => 
          <option defaultValue = "Pasirinkite Modeli" value= {item.modelID} key={index}>{item.model}</option>) }        
       </select>

        <div>
        Paieškos rezultatas:
      {getFilteredAdverts()}
        </div>

      </div>
    );
  }
}

export default FilterComponent;
