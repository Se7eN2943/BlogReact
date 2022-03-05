import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function OnAutoris({ children, auth }) {
  const location = useLocation();
  const fromPage = location?.state?.goingFrom?.pathname || '/articles';
  if (auth) return <Navigate to={fromPage} state={{ goingFrom: location }} />;
  return children;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(OnAutoris);
