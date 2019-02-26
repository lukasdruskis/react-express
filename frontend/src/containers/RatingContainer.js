import { connect } from 'react-redux'
import RatingComponent from '../components/RatingComponent'
import { ratePage, getResult } from '../actions/ratingActions'

const mapStateToProps = ({rate}) => {
    return {
        rates: rate.result,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRatePage: (type) => {
            dispatch(ratePage(type))
        },
        onGetResult: () => {
            dispatch(getResult())
        }
    }
}

const Rating = connect(mapStateToProps, mapDispatchToProps)(RatingComponent)

export default Rating