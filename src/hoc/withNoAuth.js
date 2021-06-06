import { useEffect } from "react/cjs/react.development";
import { Redirect } from "react-router";

export const withNoAuthProtected = (Component) => {
  const WithNoAuthProtected = (props) => {
    useEffect(() => {
      console.log("accessing secured page");
    }, []);

    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (token) return <Redirect to="/profile"></Redirect>;

    return <Component {...props}></Component>;
  };

  return WithNoAuthProtected;
};
