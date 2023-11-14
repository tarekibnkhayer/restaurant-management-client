import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../myHooks/useAuth";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const {createUser, updateUserProfile} = useAuth();
  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(() => {
      updateUserProfile(data.name, data.photo)
      .then(() => {
        toast("User created Successfully")
      if(location.state){
        navigate(location.state)
      }
      else{
        navigate("/");
      }
      })
      .catch(err => toast(err));
    })
    .catch(err => toast(err));
  }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>
                    Restaurant | Register
                </title>
            </Helmet>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name"  {...register('name', {required: true})} className="input input-bordered" />
                {errors.name && <p className="text-red-700"> Name is required.</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email"  {...register('email', {required: true})} className="input input-bordered"  />
                {errors.email && <p className="text-red-600">Email is required.</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password"  {...register('password', {required: true, minLength:6, maxLength:20})} className="input input-bordered"  />
                {errors.password?.type === "required" && (
        <p className="text-red-600">Password is Required</p>
      )}
                {errors.password?.type === "minLength" && (
        <p className="text-red-600">Password must be at least 6 character</p>
      )}


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" name="photo" placeholder="photo url"  {...register('photo')} className="input input-bordered"  />
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Register</button> */}
                <input type="submit" className="btn btn-primary"  value="Register" />
              </div>
              <p>Already have an account? <Link to='/login' className="text-blue-400 underline">Please Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;