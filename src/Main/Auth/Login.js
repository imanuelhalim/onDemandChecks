import React from "react";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorCognito, setErrorCognito] = React.useState(null);
  const [errorBlankfield, setErrorBlankfield] = React.useState(false);

  const clearErrorState = () => {
    setErrorCognito(null);
    setErrorBlankfield(false);
  };

  const onInputChangeUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onInputChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    // const error = Validate(event, credential);
    // if (error) {
    //   setCredential({
    //     errors: { ...credential.errors, ...error },
    //   });
    // }

    // AWS Cognito integration here
    console.log("Username" + username);
    console.log("Password" + password);
  };

  return (
    <div>
      <div className="innerhead">
        <div className="container">
          <div className="row">
            <div className="innerdetialshead">
              <h1>Login</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="innerpage">
        <div className="container">
          <div className="login-container">
            {/* <FormErrors formerrors={this.state.errors} /> */}

            <form onSubmit={handleSubmit}>
              <div className="Email">
                <MdEmail className="auth-icon" />{" "}
                <input
                  className="auth-input"
                  type="email"
                  name="username"
                  placeholder="Enter email"
                  value={username}
                  onChange={onInputChangeUsername}
                />
              </div>
              <br />
              <div className="Password">
                <MdLock className="auth-icon" />{" "}
                <input
                  className="auth-input"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={onInputChangePassword}
                />
              </div>
              <br />
              <div>
                {/* <a href="/forgotpassword">Forgot password?</a> */}
                Forgot Password?
              </div>
              <div>
                <p>
                  <button className="loginbtn">Login</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
