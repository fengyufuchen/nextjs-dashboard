import { login, signup } from "./actions";

export default function LoginPage() {
  console.log("login Page");
  return (
    <>
      <form id="demo-form">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login} className="bg-purple-300 rounded-lg m-4">
          Log in
        </button>
        <button formAction={signup} className="bg-yellow-200 rounded-lg">
          Sign up
        </button>
      </form>
      <button
        className="g-recaptcha"
        data-sitekey="6Lf35IYqAAAAAElHDEQIuitOj4W9TPID0wI4ZhML"
        data-callback="onSubmit"
        data-action="submit"
        data-badge="inline"
      >
        Submit
      </button>
    </>
  );
}
