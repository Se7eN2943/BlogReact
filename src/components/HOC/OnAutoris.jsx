import { Navigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

const OnAutoris = ({ children, auth }) => {
    const location = useLocation()
    if (auth) return <Navigate to='/articles' state={{ goingFrom: location }} />
    return children
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(OnAutoris)