import React, { Component } from 'react';

class RatingComponent extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const {onGetResult} = this.props
      onGetResult()
    }
    
    render() {
        const {onRatePage } = this.props
        return (
          <div>
            <h2>Reitingavimas</h2>
            <div>
            <img alt="mu" width="250" hegiht="250"src="http://www.pngmart.com/files/6/Manchester-United-Logo-PNG-Transparent-Picture.png"/>
              <div>
                Likes: {this.props.rates.likes}, Dislikes: {this.props.rates.dislikes}, Result: {this.props.rates.result}
              </div>
              <div>
                {this.props.rates.message}
              </div>

              <button><img alt="like" width="50" hegiht="50"src="http://icons.iconarchive.com/icons/iconsmind/outline/128/Like-2-icon.png" onClick={() => onRatePage('like')} /></button>
              <span>{this.props.count}</span>
              <button><img alt="dislike" width="50" hegiht="50"src="https://image.flaticon.com/icons/png/512/20/20661.png"  onClick={() => onRatePage('dislike')} /></button>

            </div>
          </div>
        )
      }
    }
  export default RatingComponent;