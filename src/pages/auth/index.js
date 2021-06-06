import { withNoAuthProtected } from "../../hoc/withNoAuth";

import SignIn from "./sign-in/SignIn";

function AuthPage() {
  return (
    <div className="row bg-light p-5">
      <SignIn></SignIn>
    </div>
  );
}

export default withNoAuthProtected(AuthPage);
