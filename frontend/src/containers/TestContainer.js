import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'
import { fetchMessage } from '../actions/messageActions'

const mapStateToProps = ({message}) => {
    return {
        messages: message.messages,
        isFetching: message.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandle: () => {
            dispatch(fetchMessage())
        }
    }
}

const Test = connect(mapStateToProps, mapDispatchToProps)(TestComponent)

export default Test