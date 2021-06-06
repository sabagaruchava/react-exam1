import { withAuthProtected } from "../../hoc/withAuthProtected";
import { logOut } from "../../services/auth";
import { useHistory } from "react-router";

import classNames from "classnames";
import css from "./profile.module.css";

function HomePage(props) {
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
    history.replace("/");
  };
  return (
    <div className={classNames("row mt-3 p-3", css.profile)}>
      <button className="btn btn-primary" onClick={onLogOut}>
        Log Out
      </button>
      <h2 className={classNames(css.title)}>{props.title}</h2>
    </div>
  );
}

export default withAuthProtected(HomePage);
