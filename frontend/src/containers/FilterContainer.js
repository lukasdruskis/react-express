import { connect } from 'react-redux'
import FilterComponent from '../components/FilterComponent'
import { fetchFilters } from '../actions/filterActions'

const mapStateToProps = ({filter}) => {
    return {
        filter: filter.fetchedFilters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getModelFilter: () => {
            dispatch(fetchFilters())
        },
        onChosenModel: (e) => {
                const chosenModel = e.target.value
                dispatch(fetchFilters(chosenModel))
            }
    }
    
}

const Filtering = connect(mapStateToProps, mapDispatchToProps)(FilterComponent)

export default Filtering