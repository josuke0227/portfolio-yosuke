import { useGetUser } from "../actions/user";
import Redirect from "../components/shared/Redirect";
import { isAuthorized } from "../utils/auth0";

const withAuth = (Component) => (role) => {
  return (props) => {
    const { data, loading } = useGetUser();

    if (loading) {
      return <p> Loading... </p>;
    }

    if (!data) {
      return <Redirect to="/api/v1/login" ssr />;
    } else {
      if (role && !isAuthorized(data, role)) {
        return <Redirect to="/api/v1/login" ssr />;
      }

      return <Component user={data} loadin={loading} {...props} />;
    }
  };
};

export default withAuth;
