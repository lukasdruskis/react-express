import { connect } from 'react-redux'
import SearchComponent from '../components/SearchComponent'
import { fetchData } from '../actions/searchActions'

const mapStateToProps = ({search}) => {
    return {
        search: search.fetchedData
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleKeyUp: (e) => {
            if (e.target.value.length > 2) {
                const typedData = e.target.value
                dispatch(fetchData(typedData))
            }
                
        },
        onFetchData: () => {
            dispatch(fetchData())
        } 
    }
}

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchComponent)

export default Search