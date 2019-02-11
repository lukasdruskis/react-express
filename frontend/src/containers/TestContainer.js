import {connect} from 'react-redux'
import TestComponent from '../components/TestComponent'
import {getMessage} from '../actions/messageActions'

const mapStateToProps = ({message}) => {
    return {
        messages: message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandle: () => {          
          dispatch(getMessage())
        }
    }
}

const Test = connect(mapStateToProps,mapDispatchToProps)(TestComponent)

export default Test