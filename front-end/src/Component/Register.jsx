 import Login from "./Login"
 import { Link } from "react-router-dom";
 const Register = () => {
  return (
    <>
        <form className=' container p-4' method='POST'>
                <h1 className='text-center fw-bold text-white'>Register</h1>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5">Username</label>
                    <input type="text" className="form-control p-3" />
                </div>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5 ">Email</label>
                    <input type="email" className="form-control p-3" />
                </div>
                <div className="mt-4">
                    <label className="mb-2 fw-bold fs-5" >Password</label>
                    <input type="password" className="form-control p-3" />
                </div>
              
                <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="btn btn-warning btn-lg ">Register</button>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <h4>Have Account ?  <Link className='Register' to="/login">Login</Link></h4>
                </div>
              
            </form>
    </>
  )
}

export default Register