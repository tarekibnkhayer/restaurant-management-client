import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from "../myHooks/useAuth";

const Login = () => {
  const {signInUser} = useAuth();
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(() => {
          if(location.state){
            navigate(location.state);
          }
          else{
            navigate("/")
          }
        })
        .catch(err => alert(err));
    }
    useEffect(()=> {
        loadCaptchaEnginge(6); 
    },[]);
    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
       if(user_captcha_value.length === 6){
        if(validateCaptcha(user_captcha_value)){
          setDisabled(false);
      }
      else{
          setDisabled(true);
      }
       }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>
                    Restaurant | Login
                </title>
            </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <LoadCanvasTemplate />
              <input type="text" name="captcha" placeholder="Type the Captcha" className="input input-bordered" required onChange={handleValidateCaptcha} />
            
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">Login</button>
              </div>
              <p>New to the website? <Link to='/register' className="underline text-blue-400">Please Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;