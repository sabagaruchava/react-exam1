import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { login } from "../../../services/auth";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const history = useHistory();

  const onSubmit = async (formData) => {
    const loggedIn = await login(formData);
    localStorage.setItem("auth.token", JSON.stringify(loggedIn.token));
    history.replace("/profile"); //magalitistvis
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue="eve.holt@reqres.in"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && (
          <span className="text-danger form-text">
            {errors.email.type === "required" && "Email Is required"}
          </span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          defaultValue="cityslicka"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && (
          <span className="text-danger form-text">
            {errors.password.type === "required" && "Password Is required"}
          </span>
        )}{" "}
      </div>
      <button className="btn btn-primary" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
