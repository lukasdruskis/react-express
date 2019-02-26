import { connect } from 'react-redux'
import FilterComponent from '../components/FilterComponent'
import { fetchModels, fetchAdverts } from '../actions/filterActions'

const mapStateToProps = ({filter}) => {
    return {
        filter: filter.fetchedModels,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getModelFilter: () => {
            dispatch(fetchModels())
        },

        onChosenModel: (e) => {
            const chosenModel = e.target.value
            dispatch(fetchModels(chosenModel))
            },
        getFilteredAdverts: () => {
            dispatch(fetchAdverts())
        }
    }
    
}

const Filtering = connect(
    mapStateToProps, 
    mapDispatchToProps)
    (FilterComponent)

export default Filtering