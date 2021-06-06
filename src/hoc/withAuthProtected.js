import { useEffect } from "react/cjs/react.development";
import { Redirect } from "react-router";

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log("accessing secured page");
    }, []);

    const token = JSON.parse(localStorage.getItem("auth.token"));
    if (!token) return <Redirect to="/"></Redirect>;

    return <Component {...props}></Component>;
  };

  return WithAuthProtected;
};
