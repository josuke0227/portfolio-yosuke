import { useGetUser } from "../actions/user";
import Redirect from "../components/shared/Redirect";

const withAuth = (Component) => {
  return (props) => {
    const { data, loading } = useGetUser();

    if (loading) {
      return <p> Loading... </p>;
    }

    if (!data) {
      return <Redirect to="/api/v1/login" ssr />;
    } else {
      return <Component user={data} loadin={loading} {...props} />;
    }
  };
};

export default withAuth;
