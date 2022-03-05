import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function Private({ children, auth }) {
  const location = useLocation();
  if (!auth) return <Navigate to="/sign-in" state={{ goingFrom: location }} />;
  return children;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Private);
