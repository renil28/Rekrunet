import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "../img/logo.png";

const AdminLogin = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard2")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer2">
      <div className="formWrapper2">
       <img src={Logo} alt="" width="200" height="180" />
        <span className="title2">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {err && <span>Login Unsuccessful. Please try again!</span>}
        </form>
        <p>Login as User? <Link to="/Login">User Login</Link></p>
      </div>
    </div>
  );
};

export default AdminLogin;
