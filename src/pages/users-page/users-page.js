import { withAuthProtected } from "../../hoc/withAuthProtected";

function UsersPage() {
  return (
    <div className="row">
      <h2>Users page... </h2>
    </div>
  );
}

export default withAuthProtected(UsersPage);
